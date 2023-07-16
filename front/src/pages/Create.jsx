import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

var toolBarOptions = [
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],

  [{ link: "link" }, { image: "image" }],
];

const module = { toolbar: toolBarOptions };

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createPost = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
      navigate("/");
    }
  };
  return (
    <div className="w-full md:h-[917px] h-[784px] bg-[#191919] text-white ">
      <div className="max-w-[1000px] mx-auto py-4 px-4">
        <div className="flex flex-col w-full md:w-[60%] mt-[50px] items-center  mx-auto  bg-[#191919] ">
          <h1 className="font-bold text-4xl mb-3">Create a BLOG</h1>
          <form onSubmit={createPost}>
            <input
              type="title"
              placeholder="Title"
              className="w-full my-4 bg-[#373737] px-4 py-2 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="summary"
              placeholder="Summary"
              className="w-full bg-[#373737] px-4 py-2 outline-none"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <input
              type="file"
              className="w-full bg-[#373737] px-4 py-2 my-4 outline-none"
              onChange={(e) => setFiles(e.target.files)}
            />
            <ReactQuill
              modules={module}
              theme="snow"
              className="bg-white text-black h-auto text-sm "
              value={content}
              onChange={(newValue) => setContent(newValue)}
            />
            <button className="w-full bg-[#FF3B1D]/80 mt-4 py-2 rounded-sm">
              Create blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
