import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.200" color="black">
      <Box>
        <Link as={RouterLink} to="/" px="2">
          Home
        </Link>
        <Link as={RouterLink} to="/photos" px="2">
          Photos
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
