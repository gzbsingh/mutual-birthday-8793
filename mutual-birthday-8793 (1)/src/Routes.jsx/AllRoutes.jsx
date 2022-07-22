import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Signin";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AllRoutes;
