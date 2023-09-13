import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/Loader/PageLoader";
import BottomNavbar from "../components/BottomNavbar";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
    setLoading(true);
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "auto";
    }, 1500);
  }, []);

  return (
    <>
      <ScrollRestoration />
      {loading && <PageLoader />}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      {location.pathname === "/" && <Header />}
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
      <BottomNavbar />
    </>
  );
}
