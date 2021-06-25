import { Link } from '@chakra-ui/layout';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Flex py={3} px={8} backgroundColor="gray.700" color="white" justify="space-between">
      <Flex align="center">
        <Text fontSize="lg" display="block" mr={6}>
          Fernando Villasenor
        </Text>

        <Box color="gray.300" mr={5}>
          <AnchorLink href="#portfolio">Portfolio</AnchorLink>
        </Box>

        <Box color="gray.300" mr={5}>
          <a href="Fernando_Villasenor_Resume.pdf">Resume</a>
        </Box>
      </Flex>

      <Flex alignItems="center">
        <Link
          href="http://www.linkedin.com/in/fernandovillasenor"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
          mx={3}
          fontSize="lg"
        >
          <FaLinkedin />
        </Link>

        <Link
          href="http://twitter.com/fernvillasenor"
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
          mx={3}
          fontSize="lg"
        >
          <FaTwitter />
        </Link>

        <Link
          href="http://github.com/fernvilla"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
          mx={3}
          fontSize="lg"
        >
          <FaGithub />
        </Link>

        <Link
          href="mailto:fvilla18@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="email"
          mx={3}
          fontSize="lg"
        >
          <FaEnvelope />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
