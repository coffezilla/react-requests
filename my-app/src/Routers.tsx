import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Users from "./pages/Users.tsx";
import NotFound from "./pages/NotFound.tsx";
import UserById from "./pages/UserById.tsx";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:user_id" element={<UserById />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
