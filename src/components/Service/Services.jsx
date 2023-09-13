// import bgImage from '../assets/service-bg.jpg';
// import { useEffect } from "react";
// import web from "../assets/icons/coding.png";
// import ui from "../assets/icons/design.png";
// import backend from "../assets/icons/development.png";
import { useGetServicesQuery } from "../../features/service/serviceApi";
import SectionTitle from "../SectionTitle";
import Loading from "./Loading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const {
    isSuccess,
    data: servicesData,
    isLoading,
    isError,
    error,
  } = useGetServicesQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <Loading />
        <Loading />
        <Loading />
      </>
    );
  } else if (isSuccess && servicesData?.length > 0) {
    content = servicesData?.map((service, index) => (
      <ServiceCard key={service._id} index={index + 1} service={service} />
    ));
  } else if (isSuccess && servicesData?.length == 0) {
    content = <h2>No service here.</h2>;
  } else if (isError) {
    content = <h2>{error?.message}</h2>;
  } else {
    content = <h2>Something is wrong.</h2>;
  }

  return (
    <section
      className="bg-contain bg-no-repeat bg-left py-8 my-12"
      style={
        {
          // backgroundImage: `url(${bgImage})`,
        }
      }
    >
      <div className="container">
        <SectionTitle subTitle="service" heading="Services We Offer" />
        <div className="grid grid-cols-12 gap-4">
          <div
            data-aos="fade-up-left"
            data-aos-duration="500"
            className="col-span-12 md:col-span-3 bg-red-600/80 text-white px-5 py-8 rounded-3xl transition"
          >
            <h4>WHAT WE DO</h4>
            <h2 className="text-5xl font-bold leading-[4rem]">
              Services <br /> We <br /> Offer
            </h2>
            <p className="my-3">
              Reprehenderit rui in ea volurate esse ruam nihil molestiae consea
              eum fugiat ruo voluetas.
            </p>
            <button className="btn">Get Started</button>
          </div>
          {content}
        </div>
      </div>
    </section>
  );
}
