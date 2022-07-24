import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../Pages/Register/Register";
import Home from "./Home";
import SignIn from "./Signin";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default AllRoutes;
