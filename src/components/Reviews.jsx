import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

const reviews = [
  { user: "User1", text: "Amazing show!" },
  { user: "User2", text: "Loved it!" },
];

const Reviews = () => {
  return (
    <Box id="reviews" py={10} bg="gray.50">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Reviews
      </Text>
      <Stack spacing={4} px={10}>
        {reviews.map((r, i) => (
          <Box key={i} p={4} border="1px" borderColor="gray.200" borderRadius="md">
            <Text fontWeight="bold">{r.user}</Text>
            <Text>{r.text}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Reviews;
