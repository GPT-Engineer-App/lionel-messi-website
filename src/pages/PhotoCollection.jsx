import React from "react";
import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const PhotoCollection = () => {
  return (
    <Box>
      <Heading as="h1" size="xl">
        Photo Collection
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={10} p={10}>
        <Image src="https://example.com/photo1.jpg" alt="Messi Photo 1" />
        <Image src="https://example.com/photo2.jpg" alt="Messi Photo 2" />
        <Image src="https://example.com/photo3.jpg" alt="Messi Photo 3" />
        <Image src="https://example.com/photo4.jpg" alt="Messi Photo 4" />
        <Image src="https://example.com/photo5.jpg" alt="Messi Photo 5" />
        <Image src="https://example.com/photo6.jpg" alt="Messi Photo 6" />
      </SimpleGrid>
    </Box>
  );
};

export default PhotoCollection;
