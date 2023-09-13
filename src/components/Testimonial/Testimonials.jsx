import SectionTitle from "../SectionTitle";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-8 my-12">
      <div className="container">
        <SectionTitle
          subTitle="Testimonial"
          heading={
            <>
              What Our Cutomers are <br /> Saying About us
            </>
          }
        />
        <div className="mt-16 md:grid grid-cols-12 md:grid-cols-3 gap-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
