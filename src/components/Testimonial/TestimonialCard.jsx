import React from "react";
import RatingBar from "../RatingBar";

export default function TestimonialCard() {
  return (
    <article className="w-full p-5 text-center rounded-lg mt-5 bg-slate-200">
      <RatingBar />
      <p>
        Duis aute irure dolor in reprehender voluptate velit esse cillum dolore
        fugiat nulla pariatur sint occaecat cupidata non proident, sunt in culpa
        aui office deserunt mollit anim laborum.
      </p>
      <div className="flex justify-center items-center gap-3 mt-6">
        <img
          className="w-12 h-12 rounded-full"
          src="http://elementorpress.com/templatekit-pro/layout81/wp-content/uploads/2023/02/Kevin-Andrew-testimonial.jpg"
          alt="avatar"
        />
        <div>
          <strong>Kevin Andrew</strong>
          <br />
          <span>Assitant Manager</span>
        </div>
      </div>
      <div className="flex justify-end">
        <svg
          className="w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
      </div>
    </article>
  );
}
