import { Box, Container, SimpleGrid, Image } from "@chakra-ui/react";

const Photos = () => {
  const photoUrls = ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"];

  return (
    <Container maxW="container.xl" p={4}>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10}>
        {photoUrls.map((url, index) => (
          <Box key={index} boxShadow="sm" rounded="lg" overflow="hidden">
            <Image src={url} alt={`Lionel Messi ${index}`} objectFit="cover" width="100%" height="auto" />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Photos;
