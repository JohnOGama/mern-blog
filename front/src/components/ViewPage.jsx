import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const ViewPage = () => {
  const { id } = useParams();
  const [postPage, setPostPage] = useState(null);

  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) =>
      response.json().then((postInfo) => setPostPage(postInfo))
    );
  }, []);

  if (!postPage) return "";
  return (
    <div className="w-full bg-[#FFFFFF] pb-10">
      <div className="max-w-[1000px] mx-auto flex flex-col text-sm md:text-xl">
        <img
          src={`http://localhost:4000/${postPage.cover}`}
          alt=""
          className="mt-4"
        />
        <div className="px-4 ">
          <h1 className="text-4xl py-8 font-[600] md:text-5xl">
            {postPage.title}
          </h1>
          <div className="flex mb-4 relative">
            <h1 className="flex-1">
              Written By{" "}
              <span className="font-bold">{postPage.author.username}</span>
            </h1>
            <time>{formatISO9075(new Date(postPage.createdAt))}</time>
            <div className="w-full h-[2px] bg-black absolute bottom-[-13px] "></div>
          </div>
          <div
            className="mt-10 leading-7"
            dangerouslySetInnerHTML={{ __html: postPage.content }}
          />
          {userInfo.id === postPage.author._id && (
            <div className="mt-3 md:mt-8">
              <Link
                className=" px-8 py-1 bg-black text-white rounded-sm md:text-2xl "
                to={`/edit/${postPage._id}`}
              >
                Edit
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
