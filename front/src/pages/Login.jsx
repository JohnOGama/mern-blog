import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        alert("Login successful");
        setRedirect(true);
      });
    } else {
      alert("Login failed");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full md:h-[917px] h-[784px] bg-[#191919] text-white">
      <div className="max-w-[1000px] mx-auto py-4 px-4 md:px-4 ">
        <div className="flex flex-col w-[80%] md:w-[40%] mt-[150px] items-center  mx-auto  bg-[#191919] ">
          <h1 className="font-bold text-4xl mb-3">Login</h1>
          <form onSubmit={login}>
            <input
              type="text"
              placeholder="Username"
              className="w-full my-4 bg-[#373737] px-4 py-2 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#373737] px-4 py-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-[#FF3B1D]/80 mt-4 py-2 rounded-sm">
              Login
            </button>
            <p className="text-sm mt-4 text-center">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
