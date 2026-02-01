import React from "react";
import { Box, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box id="footer" bg="teal.700" color="white" py={6} textAlign="center">
    <Text fontSize="xl"fontWeight="bold">Buy Tickets</Text>
    <Stack direction="row" spacing={4} justify="center" mt={4}>
      <Link href="https://www.bookmyshow.com" isExternal>BookMyShow</Link>
      <Link href="https://www.amazon.com" isExternal>Amazon</Link>
    </Stack>
  </Box>
);

export default Footer;
