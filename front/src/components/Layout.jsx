import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Layout = () => {
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
      });
  }, []);

  const logout = async () => {
    const response = await fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });

    console.log(response);
    navigate("/");
    setUserInfo("");
  };

  const username = userInfo?.username;

  return (
    <>
      <div className="w-full bg-[#191919] text-white ">
        <div className=" max-w-[1000px] mx-auto p-4 md:py-4 flex justify-between items-center text-sm md:text-lg">
          <Link to="/" className="font-[600] text-xl md:text-3xl">
            <span>My</span>BLOG
          </Link>
          {username ? (
            <div className="flex gap-3 items-center">
              <Link
                to="/create"
                className="bg-[#FF3B1D]/80 px-2 py-1 rounded-sm"
              >
                Create blog
              </Link>
              <a onClick={logout}>Logout</a>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
