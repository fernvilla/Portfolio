import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import { Project } from './../components';
import { projects } from './../globals/projects';

const Portfolio = () => {
  return (
    <Container maxW="container.xl" id="portfolio" py={10}>
      <Box textAlign="center">
        <Heading size="lg" mb={10} fontWeight="base">
          Portfolio
        </Heading>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Portfolio;
