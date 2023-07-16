import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
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

  const username = userInfo?.username;
  return (
    <>
      <div className="w-full bg-[#191919] ">
        <div className="max-w-[1000px] mx-auto px-4 h-[400px]  text-[#FFFFFF] flex flex-col pt-[120px] text-sm md:text-center">
          <h1 className="font-[400] text-2xl w-[300px] md:w-full md:text-5xl">
            Welcome to our <span className="font-bold">BLOG</span>
          </h1>
          <p className=" leading-5 md:leading-9 mb-5 md:mb-7 text-[#dbdbdb] md:text-xl md:w-[620px] md:mt-2 md:mx-auto">
            Stay updated with the newest design and development stories, case
            studies, and insights shared by DesignDK Team
          </p>
          <div>
            {username ? (
              ""
            ) : (
              <Link
                to="/login"
                className="bg-[#FF3B1D]/80 px-5 py-1  rounded-sm text-lg md:text-2xl "
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
