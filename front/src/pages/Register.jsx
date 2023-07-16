import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successful");
      navigate("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="w-full md:h-[917px] h-[784px] overflow-hidden  bg-[#191919] text-white">
      <div className="max-w-[1000px] mx-auto py-4 px-4 md:px-4 ">
        <div className="flex flex-col w-[80%] md:w-[40%] mt-[150px] items-center mx-auto  bg-[#191919]">
          <h1 className="font-bold text-4xl mb-3">Register</h1>
          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Username"
              className="w-full my-4 bg-[#373737] px-4 py-2 outline-none"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#373737] px-4 py-2 outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              className="w-full bg-[#FF3B1D]/80 mt-4 py-2 rounded-sm"
              onClick={register}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
