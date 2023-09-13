import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Oops!</h1>
        <p className="my-2">Sorry, an unexpected error has occurred.</p>
        <p className="font-semibold">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="btn mt-5">Go to home</button>
        </Link>
      </div>
    </div>
  );
}
