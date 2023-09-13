import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import handleLogout from "../utils/handleLogout";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      document.addEventListener("mousewheel", function (event) {
        if (event.wheelDelta >= 0) {
          // console.log("up");
        } else {
          // console.log("down");
        }
      });

      // var scrollBefore = 0;

      // window.addEventListener('scroll',function(e){
      //     const scrolled = window.scrollY;

      //     if(scrollBefore > scrolled){
      //         console.log("ScrollUP");
      //         scrollBefore = scrolled;
      //         //Desired action
      //     }else{
      //         scrollBefore = scrolled;
      //         console.log("ScrollDOWN");
      //         //Desired action
      //     }

      // })

      // const nav = document.querySelector("nav");
      // const link = document.querySelectorAll("nav a");

      // if (this.scrollY > 130) {
      //   nav.classList.add("bg-white");
      //   nav.classList.add("shadow-lg");
      //   Array.from(link).forEach((el) => el.classList.remove("text-gray-100"));
      //   Array.from(link).forEach((el) => el.classList.add("text-gray-700"));
      // } else {
      //   nav.classList.remove("bg-white");
      //   nav.classList.remove("shadow-lg");
      //   Array.from(link).forEach((el) => el.classList.add("text-gray-100"));
      //   Array.from(link).forEach((el) => el.classList.remove("text-gray-700"));
      // }
    });
  }, []);

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Services",
      path: "/services",
    },
  ];

  function handleLogoutAndState() {
    handleLogout()
    dispatch(logout());
  }

  return (
    <nav className="sticky top-0 bg-base-100 z-30 shadow">
      <div className="container">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/">
              <span className="tracking-tighter select-none self-center text-xl md:text-3xl uppercase  font-extrabold  whitespace-nowrap">
                Digital Agency
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            {user && user?.displayName ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="profile" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>

                  <li onClick={handleLogoutAndState}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
