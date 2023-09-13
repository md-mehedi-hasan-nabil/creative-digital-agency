import { useEffect, useState } from "react";
import Loading from "../../components/Service/Loading";
import ServiceCard from "../../components/Service/ServiceCard";
import {
  useGetServicesQuery,
  useUpdateServiceMutation,
} from "../../features/service/serviceApi";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

export default function UpdateService() {
  const {
    data: services,
    isLoading: isLoadingFetchServices,
    isSuccess: isSuccessFetchServices,
  } = useGetServicesQuery();

  const [updateService, { isSuccess: isSuccessUpdateService }] =
    useUpdateServiceMutation();

  const [editMode, setEditMode] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(editMode?.title);
    setDescription(editMode?.description);
  }, [editMode]);

  useEffect(() => {
    if (isSuccessUpdateService) {
      toast.success("Service update successful.");
    }
  }, [isSuccessUpdateService]);

  let content;

  if (isLoadingFetchServices) {
    content = <Loading />;
  } else if (isSuccessFetchServices && services?.length > 0) {
    content = services.map((service, index) => (
      <ServiceCard key={service._id} index={index + 1} service={service}>
        <div>
          {editMode?._id === service?._id ? (
            <button
              onClick={() => setEditMode(null)}
              className="btn btn-sm btn-error"
            >
              Cancel
            </button>
          ) : (
            <button
              disabled={editMode && !(editMode?._id === service?._id)}
              onClick={() => setEditMode(service)}
              className="btn btn-sm btn-success"
            >
              Update
            </button>
          )}
        </div>
      </ServiceCard>
    ));
  } else if (isSuccessFetchServices && services?.length == 0) {
    content = <h2 className="text-2xl font-medium my-5">No content here.</h2>;
  } else {
    content = <h2 className="text-xl font-medium my-5">Something is worng.</h2>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title && description) {
      updateService({ _id: editMode._id, body: { title, description } });
    } else {
      toast.error("Field required.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Update Service Page</title>
      </Helmet>
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        <div
          className={`col-span-12 ${
            editMode ? "md:col-span-6" : "md:col-span-12"
          } py-4`}
        >
          <h2 className="text-2xl font-semibold my-5">Show all services</h2>
          <div className="flex flex-col gap-6">{content}</div>
        </div>
        {editMode && (
          <div className="col-span-6 py-6">
            <h2 className="text-2xl my-5 font-semibold">Update form</h2>
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-aos="fade-up"
              >
                <div>
                  <label className="label">
                    <span className="text-base label-text">Title</span>
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter title"
                    className="w-full input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Description</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full textarea textarea-bordered h-24"
                    name="description"
                    placeholder="Write service description"
                    required
                  ></textarea>
                </div>

                <div>
                  <button className="btn btn-primary w-full">Update</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
