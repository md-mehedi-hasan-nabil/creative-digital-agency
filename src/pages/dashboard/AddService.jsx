/**
 * This is add service page.
 * Only admin can visit this page.
 * Admin can add a new service.
 */

import { useForm } from "react-hook-form";
import loaderImage from "../../assets/loading.png";
import { useEffect, useState } from "react";
import {
  useAddServiceMutation,
  useGetServicesQuery,
} from "../../features/service/serviceApi";
import toast from "react-hot-toast";
import ServiceCard from "../../components/Service/ServiceCard";
import Loading from "../../components/Service/Loading";
import { Helmet } from "react-helmet-async";

export default function AddService() {
  const {
    isSuccess: isSuccessFetchServices,
    isLoading: isLoadingFetchServices,
    data: services,
    refetch,
  } = useGetServicesQuery();
  const [addService, { isSuccess: isSuccessAddService }] =
    useAddServiceMutation();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /**
   * Form submit handler
   */
  const onSubmit = async (data) => {
    setLoading(true);
    const { title, description } = data;

    const result = await uploadImage(data.image[0]);
    /**
     * uploadImage function return an object
     */
    if (result?.success) {
      const { display_url } = result.data;
      addService({
        title,
        description,
        image: display_url,
      });
    }
  };
  /**
   * Image upload to imageBB
   */
  async function uploadImage(image) {
    const form = new FormData();
    form.append("image", image);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_IMAGE_BB_CLIENT_API_KEY
        }`,
        {
          method: "POST",
          body: form,
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      toast.error(error?.message ? error.message : "Server side error");
      setLoading(false);
      console.log(error);
    }
  }

  /**
   * Show alert after submit form
   */
  useEffect(() => {
    if (isSuccessAddService) {
      toast.success("Service insert successful.");
      setLoading(false);
      /**
       * reset form after successful form submission
       */
      reset();
      /**
       * refetch services data
       */
      refetch();
    }
  }, [isSuccessAddService, reset, refetch]);

  let content;

  if (isLoadingFetchServices) {
    content = <Loading />;
  } else if (isSuccessFetchServices && services?.length > 0) {
    content = services.map((service, index) => (
      <ServiceCard key={service._id} index={index + 1} service={service} />
    ));
  } else if (isSuccessFetchServices && services?.length == 0) {
    content = <h2 className="text-xl font-medium my-5">No content here.</h2>;
  } else {
    content = <h2 className="text-xl font-medium my-5">Something is worng.</h2>;
  }

  return (
   <>
   <Helmet>
    <title>Dashboard | Add service page</title>
   </Helmet>
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      <div className="col-span-12 md:col-span-8 py-4">
        <h1 className="text-3xl font-semibold mb-4 text-gray-700">
          Add new Service
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Title</span>
            </label>

            <input
              {...register("title", { required: true })}
              aria-invalid={errors.title ? "true" : "false"}
              type="text"
              placeholder="Write service title"
              name="title"
              className="w-full input input-bordered"
            />

            {errors.title?.type === "required" && (
              <p className="animate-bounce text-sm text-red-600 font-semibold my-1">
                Title is required
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Description</span>
            </label>

            <textarea
              {...register("description", { required: true })}
              aria-invalid={errors.title ? "true" : "false"}
              className="w-full textarea textarea-bordered h-24"
              name="description"
              placeholder="Write service description"
            ></textarea>

            {errors.description?.type === "required" && (
              <p className="animate-bounce text-sm text-red-600 font-semibold my-1">
                Description field is required.
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-base label-text">Pick a cover image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
            />

            {errors.image?.type === "required" && (
              <p className="animate-bounce text-sm text-red-600 font-semibold my-1">
                Description field is required.
              </p>
            )}
          </div>
          <div>
            <button
              className="btn btn-block mt-2 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <>
                  <img
                    className="w-8 animate-spin"
                    src={loaderImage}
                    alt="loaing"
                  />
                </>
              ) : (
                <span>Submit information</span>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-12 md:col-span-4 py-4">
        <h2 className="text-2xl font-medium my-5">Show all services</h2>
        <div className="flex flex-col gap-6">{content}</div>
      </div>
    </div>
   </>
  );
}
