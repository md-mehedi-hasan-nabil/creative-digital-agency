import { useCallback, useEffect, useState } from "react";
import { Drawer, Menu } from "react-daisyui";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import handleLogout from "../utils/handleLogout";
import { logout } from "../features/auth/authSlice";

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);
  const args = { hover: "true" };

  console.log(user);

  useEffect(() => {
    if (visible) {
      window.scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [visible]);

  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  function handleLogoutAndState() {
    handleLogout();
    dispatch(logout());
  }

  return (
    <>
      <ScrollRestoration />
      <nav className="sticky top-0 z-10">
        <div className="container">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link to="/">
                <span className="tracking-tighter select-none self-center text-xl md:text-3xl uppercase  font-extrabold  whitespace-nowrap">
                  Digital Agency
                </span>
              </Link>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              {user && user?.photoURL && (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li onClick={handleLogoutAndState}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              )}
              <button onClick={toggleVisible} className="btn btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        {...args}
        open={visible}
        onClickOverlay={toggleVisible}
        side={
          <Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
            <Menu.Item>
              <Link onClick={toggleVisible} to="/dashboard">
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link onClick={toggleVisible} to="add-service">
                Add Service
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link onClick={toggleVisible} to="edit-service">
                Update Service
              </Link>
            </Menu.Item>
          </Menu>
        }
      >
        <div className="container py-5">
          <Outlet />
        </div>
      </Drawer>
    </>
  );
}
