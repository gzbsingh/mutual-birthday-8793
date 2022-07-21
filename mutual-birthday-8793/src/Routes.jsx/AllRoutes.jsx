import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Signin";

function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route />
      </Routes>
    </Box>
  );
}

export default AllRoutes;
