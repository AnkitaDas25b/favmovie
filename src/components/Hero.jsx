import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box id="home" textAlign="center" py={20} bgImage="url('https://i.ytimg.com/vi/atozjUyQ0Tc/maxresdefault.jpg')"
     bgSize="cover" bgPosition="center" bgRepeat="no-repeat" minH="90vh"  
     >
      <Heading fontSize="4xl" color="white">Welcome to My Favorite Series</Heading>
      
      <Text color="white" fontWeight="bold">Box Office Hit!!!</Text>
      <Text color="white" fontWeight="bold">7/10 in Entertainment</Text>
      
      <Button colorScheme="teal" mt="400">Watch Now</Button>
    </Box>
  );
};

export default Hero;
