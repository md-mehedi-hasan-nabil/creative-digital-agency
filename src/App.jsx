import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import useFirebaseAuth from "./hooks/useFirebaseAuth";
import PageLoader from "./components/Loader/PageLoader";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  const { loading } = useFirebaseAuth();
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <HelmetProvider>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <RouterProvider router={router} />
          <Toaster position="top-center" reverseOrder={false} />
        </>
      )}
    </HelmetProvider>
  );
}
