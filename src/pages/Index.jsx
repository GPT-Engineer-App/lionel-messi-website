import { Box, Container, Flex, Heading, Text, Image, VStack, HStack, Link, Icon, Button } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaTrophy, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" my={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1626025437642-0b05076ca301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW9uZWwlMjBNZXNzaXxlbnwwfHx8fDE3MDk4OTQ4ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Lionel Messi" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Lionel Messi
        </Heading>
        <Text fontSize="lg" mb={4}>
          Professional Footballer
        </Text>
        <HStack spacing={5}>
          <Link href="https://instagram.com/leomessi" isExternal>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
          <Link href="https://twitter.com/TeamMessi" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://www.facebook.com/leomessi" isExternal>
            <Icon as={FaFacebookF} w={6} h={6} />
          </Link>
        </HStack>
      </Flex>
      <VStack spacing={5} mb={10}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Biography</Heading>
          <Text mt={4}>Lionel Messi is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six Ballon d'Or awards and a record six European Golden Shoes. He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, seven Copa del Rey titles and four UEFA Champions Leagues.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Achievements</Heading>
          <VStack mt={4} align="start">
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>6x Ballon d'Or</Text>
            </HStack>
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>6x European Golden Shoes</Text>
            </HStack>
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>10x La Liga Titles</Text>
            </HStack>
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>7x Copa del Rey Titles</Text>
            </HStack>
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>4x UEFA Champions League</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>
      <Flex justify="center">
        <Button colorScheme="blue" size="lg" leftIcon={<FaPlus />} onClick={() => (window.location.href = "/photos")}>
          See More
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
