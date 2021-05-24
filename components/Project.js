import { Box, Link, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';

const Project = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Box>
      <Link href={project.url} isExternal>
        <Box
          backgroundImage={`url(${project.img})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="50%"
          width="100%"
          height="0"
          paddingTop="50%"
          overflow="hidden"
          pos="relative"
          title={project.name}
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        >
          <Box
            pos="absolute"
            bottom="0"
            backgroundColor="rgba(0,0,0,.7)"
            width="100%"
            color="white"
            p={3}
            borderTop="1px solid #f9f9f9"
            lineHeight="1.3em"
            transition="opacity 0.5s ease"
            opacity={showDescription ? 1 : 0}
          >
            <Text>
              <strong>{project.name}</strong>
            </Text>

            <Text>
              <em>{project.details}</em>
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Project;
