import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";
import Create from "./pages/Create";
import ViewPage from "./components/ViewPage";
import EditPost from "./components/EditPost";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/post/:id" element={<ViewPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
