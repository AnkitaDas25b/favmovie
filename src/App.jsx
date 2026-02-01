import React from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CastCrew from "./components/CastCrew";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <CastCrew />
      <Reviews />
      <Footer />
    </Box>
  );
};

export default App;
