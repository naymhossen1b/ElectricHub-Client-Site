import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { WiDayCloudyWindy, WiNightFog } from "react-icons/wi";
import { RxAvatar, RxCross2 } from "react-icons/rx";
import { AuthContext } from "../Auth/Authprovider";
import { useCart } from "../Context/Cart";
import { Badge } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { logout, user } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState("false");

  const [cart] = useCart();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSignOut = () => {
    logout()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" py-3 shadow-md  dark:bg-black dark:text-white">
      <nav className="flex justify-between items-center">
        <div className="md:hidden text-4xl" onClick={() => setOpen(!open)}>
          {open == true ? <RxCross2 /> : <HiMenuAlt2 />}
        </div>
        <ul
          className={`md:flex absolute md:static justify-center items-center font-bold text-start 
        ${open ? "" : "hidden"}
         gap-4 lg:mr-5 p-1 rounded-md mt-40 md:mt-0 ml-4 bg-white text-black `}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-green-500" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-green-500" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-green-500" : ""
              }
            >
              <Badge count={cart?.length} showZero offset={[10, -5]}>
                Cart
              </Badge>
            </NavLink>
          </li>
          <li>
            <fieldset className="w-full space-y-1 dark:text-gray-100 md:ml-8">
              <label className="hidden">Search</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-900"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none border text-black"
                />
              </div>
            </fieldset>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-5">
          <div className="flex-1">
            <div className="flex items-center">
              <h1 className="md:text-4xl font-bold mr-0 md:mr-20">ElectricHub</h1>

              <p
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                className="rounded-full toggle toggle-success dark:bg-white dark:text-black bg-black text-white"
              >
                {darkMode ? <WiDayCloudyWindy /> : <WiNightFog />}
              </p>
            </div>
          </div>

          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="md:btn btn-sm hover:bg-red-400 rounded-md bg-gray-400 border-none text-white"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button className="md:btn hover:cursor-pointer border-none font-bold hover:bg-yellow-500">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "font-bold text-green-500" : ""
                }
              >
                Login
              </NavLink>
            </button>
          )}
          <div>
            {user?.email ? (
              <div className="avatar rounded-full">
                <div className="w-10 rounded-full">
                  <img className="rounded-full" src={user.photoURL} />
                </div>
              </div>
            ) : (
              <div className="avatar">
                <RxAvatar className="text-gray-500 text-5xl md:text-6xl mr-2" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
