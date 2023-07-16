import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

// const Post = ({ _id, image, author, title, summary, time, content }) => {
//   return (
//     <div className="max-w-[1000px] mx-auto bg-black h-screen">
//       <div>
//         <Link to={`/post/${_id}`}>
//           <img src={"http://localhost:4000/" + image} />
//         </Link>
//         <div className="text-black">
//           asdasd
//           <time>{formatISO9075(new Date(time))}</time>
//           <h1>{author.username}</h1>
//           <Link to={`/post/${_id}`}>
//             <h1>{title}</h1>
//           </Link>
//           <p>{summary}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Post = ({ _id, cover, author, title, summary, createdAt, content }) => {
  return (
    <div className="">
      <div className=" px-4 pt-4 md:flex  md:h-auto ">
        <img
          src={"http://localhost:4000/" + cover}
          className="w-full md:w-[350px] md:h-[250px] lg:w-[250px] object-cover  "
        />

        <div className="text-black text-sm bg-white px-4 pt-2 shadow-xl lg:shadow-none pb-5  md:w-full md:h-[250px]">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold">{author.username}</h1>
            <time className="text-gray-500/80 font-[400]">
              {formatISO9075(new Date(createdAt))}
            </time>
          </div>

          <h1 className="font-[500] capitalize text-3xl my-2">{title}</h1>

          <p>{summary.substring(2, 190)}...</p>
          <div className="relative font-[600] mt-2">
            <Link to={`/post/${_id}`} className="">
              View More
            </Link>
            <div className="h-1 w-[74px] bg-red-400 bottom-[-7px] absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
