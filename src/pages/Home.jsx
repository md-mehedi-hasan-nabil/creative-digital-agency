import About from "../components/About";
import Testimonials from "../components/Testimonial/Testimonials";
import News from "../components/News/News";
import TeamMembers from "../components/TeamMember/TeamMembers";
import Contact from "../components/Contact";
import Location from "../components/Location/Location";
import PricingPlans from "../components/PricingPlans";
import Services from "../components/Service/Services";

export default function Home() {
  return (
    <>
      <About />
      <News />
      <Services />
      <Testimonials />
      <TeamMembers />
      <Contact />
      <PricingPlans />
      <Location />
    </>
  );
}
