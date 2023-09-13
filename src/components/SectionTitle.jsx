import PropTypes from "prop-types";

export default function SectionTitle({ subTitle, heading }) {
  return (
    <div className="text-center mb-16">
      <h4 className="heading-title" data-aos="zoom-in" data-aos-duration="2000">
        {subTitle}
      </h4>
      <h2 className="title" data-aos="zoom-in-up" data-aos-duration="1000">
        {heading}
      </h2>
    </div>
  );
}

SectionTitle.propTypes = {
  subTitle: PropTypes.string.isRequired,
  heading: PropTypes.any.isRequired,
};
