import PropTypes from "prop-types";

export default function Modal({ uniqueid, children }) {
  return (
    <div>
      {/* <input type="checkbox" id={uniqueid} className="modal-toggle" /> */}
      <div className="modal">
        <div className="modal-box relative">
          <label
            // htmlFor={uniqueid}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          { children }

          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  uniqueid: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
