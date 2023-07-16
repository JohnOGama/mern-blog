import { useState, useEffect } from "react";
import Header from "../components/Header";
import Post from "../components/Post";

const Hero = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPost(posts);
      });
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-auto ">
        <div className="max-w-[1200px] mx-auto ">
          <div className="grid grid-cols-1  lg:grid-cols-2 ">
            {post.lenght > 0 ? (
              <h1 className="text-black">wala</h1>
            ) : (
              post.map((post, index) => <Post {...post} key={index} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
