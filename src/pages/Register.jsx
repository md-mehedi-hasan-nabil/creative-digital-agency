import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-80">
        <form>
          <div className="my-3">
            <label className="block mb-1" htmlFor="email">
              Name*
            </label>
            <input
              id="name"
              type="email"
              name="email"
              placeholder="Type email here"
              className="input input-bordered input-md input-primary w-full "
            />
          </div>
          <div className="my-3">
            <label className="block mb-1" htmlFor="email">
              Email*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Type email here"
              className="input input-bordered input-md input-primary w-full "
            />
          </div>
          <div className="my-3">
            <label className="block mb-1" htmlFor="email">
              Password*
            </label>
            <input
              id="email"
              type="email"
              name="password"
              placeholder="Type email here"
              className="input input-bordered input-md input-primary w-full"
            />
          </div>
          <p>
            Already have an account? <Link className="font-semibold" to="/login">Sign in</Link>
          </p>
          <button className="btn mt-1">Register</button>
        </form>
      </div>
    </section>
  );
}
