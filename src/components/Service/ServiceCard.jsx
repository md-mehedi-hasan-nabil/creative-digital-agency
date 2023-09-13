import PropTypes from "prop-types";

export default function ServiceCard({ index, service, children }) {
  const { title, description, image } = service || {};

  return (
    <div
      data-aos="fade-up-left"
      data-aos-duration={index * 1000}
      className="col-span-12 md:col-span-3 relative bg-white px-5 py-8 shadow rounded-3xl transition hover:shadow-lg hover:border border-black"
    >
      <img className="w-16 mb-3" src={image} alt="image" />
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="my-3">{description}</p>

      {children ? (
        children
      ) : (
        <button className="font-bold text-xl mt-4 transition text-lime-500 hover:text-slate-600">
          Read More
        </button>
      )}
    </div>
  );
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  service: PropTypes.object.isRequired,
  children: PropTypes.node,
};
