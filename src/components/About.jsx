/**
 * About section
 * 
 */

import aboutImage from "../assets/about.jpg";
import bgImage from "../assets/dot.png";

export default function About() {
  return (
    <section className="container py-8 my-12">
      <div className="relative md:flex justify-between gap-8 items-center">
        <img
        data-aos="fade-right"
          className="w-full md:w-1/2 md:h-[30rem] object-cover rounded-2xl z-10"
          src={aboutImage}
          alt="about"
        />
        <img
        data-aos="fade-right"
          className="opacity-0 md:opacity-100 absolute w-1/4 left-28 -bottom-12"
          src={bgImage}
          alt="bgImage"
        />

        <div className="flex flex-col gap-10" data-aos="fade-left">
          <h4 className="heading-title">About Us</h4>
          <h2 className="title">
            Creative Digital <br /> Experience Company
          </h2>
          <p>
            Quis autem vel eum iure reprehenderit rui in ea volurate veli <br />{" "}
            esse ruam nihil molestiae conseauatur vel illum rui dolorema <br />{" "}
            eum fugiat ruo voluetas nulla pariatur.
          </p>
          <div>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
