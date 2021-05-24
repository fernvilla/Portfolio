import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { UnorderedList } from '@chakra-ui/layout';
import { ListItem } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React from 'react';
import {
  FaCheckSquare,
  FaDatabase,
  FaGithub,
  FaLaptopCode,
  FaPhotoVideo,
  FaRegFileCode,
} from 'react-icons/fa';

const Home = () => {
  return (
    <Box
      color="white"
      background="linear-gradient(90deg,#75bdd1 0,#528ca2 0,#49a5bf)"
      pt={10}
      pb={6}
      px={10}
      fontSize="2xl"
    >
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <Box>
          <Heading size="2xl" mb={10} mt={'4em'} fontWeight="semibold">
            Sr. Frontend Engineer
            <chakra.span pl={2} className="blinking-cursor">
              |
            </chakra.span>
          </Heading>

          <Heading fontSize="base" fontWeight="base">
            Hi, my name is Fernando Villasenor. I'm a senior frontend engineer based in Los Angeles
            CA, w/7+ years experience and specializing on front end development.
          </Heading>
        </Box>

        <Box textAlign="center" maxW="600px" margin="auto">
          <Heading size="lg" mb={5}>
            Skills
          </Heading>

          <Flex justify="center" fontSize="4xl" mb={2}>
            <FaLaptopCode />
          </Flex>

          <Heading size="md" fontWeight="base" mb={2}>
            Front End
          </Heading>

          <SimpleGrid columns={[1, null, 2]} mb={10}>
            <UnorderedList fontSize="sm" textAlign="left" fontWeight="semibold">
              <ListItem>HTML/CSS</ListItem>
              <ListItem>Javascript/Typescript</ListItem>
              <ListItem>React/Redux</ListItem>
              <ListItem>jQuery</ListItem>
              <ListItem>Next.js</ListItem>
            </UnorderedList>

            <UnorderedList fontSize="sm" textAlign="left" fontWeight="semibold">
              <ListItem>Bootstrap, Semantic UI, Chakra UI, Material UI, Tailwind CSS</ListItem>
              <ListItem>SCSS/LESS</ListItem>
              <ListItem>CSS Modules</ListItem>
              <ListItem>Styled Components</ListItem>
            </UnorderedList>
          </SimpleGrid>

          <SimpleGrid columns={[1, null, 2]} mb={10}>
            <Box>
              <Flex justify="center" fontSize="4xl" mb={2}>
                <FaRegFileCode />
              </Flex>

              <Heading size="md" fontWeight="base" mb={3}>
                Back End
              </Heading>

              <UnorderedList fontSize="sm" textAlign="left" fontWeight="semibold">
                <ListItem>Node/Express</ListItem>
                <ListItem>.Net</ListItem>
                <ListItem>Ruby on Rails</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Flex justify="center" fontSize="4xl" mb={2}>
                <FaGithub />
              </Flex>

              <Heading size="md" fontWeight="base" mb={3}>
                Tools
              </Heading>

              <UnorderedList fontSize="sm" textAlign="left" fontWeight="semibold">
                <ListItem>Git/Github</ListItem>
                <ListItem>Webpack/NPM/Yarn/Gulp</ListItem>
                <ListItem>Heroku</ListItem>
                <ListItem>Jira</ListItem>
              </UnorderedList>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={[1, null, 2]} mb={10}>
            <Box>
              <Flex justify="center" fontSize="4xl" mb={2}>
                <FaPhotoVideo />
              </Flex>

              <Heading size="md" fontWeight="base" mb={3}>
                Design
              </Heading>

              <UnorderedList fontSize="sm" textAlign="left" fontWeight="semibold">
                <ListItem>Adobe Photoshop</ListItem>
                <ListItem>Responsive Design</ListItem>
                <ListItem>PSD to HTML/CSS</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Flex justify="center" fontSize="4xl" mb={2}>
                <FaDatabase />
              </Flex>

              <Heading size="md" fontWeight="base" mb={3}>
                Databases
              </Heading>

              <UnorderedList fontSize="sm" textAlign="left" fontWeight="semibold">
                <ListItem>SQL/PostgreSQL</ListItem>
                <ListItem>Microsoft SQL Server</ListItem>
                <ListItem>Prisma ORM, Sequelize ORM</ListItem>
                <ListItem>MongoDB/Mongoose</ListItem>
              </UnorderedList>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={[1, null, 2]} mb={10}>
            <Box>
              <Flex justify="center" fontSize="4xl" mb={2}>
                <FaCheckSquare />
              </Flex>

              <Heading size="md" fontWeight="base" mb={3}>
                Testing
              </Heading>

              <UnorderedList fontSize="sm" textAlign="left" fontWeight="semibold">
                <ListItem>Mocha</ListItem>
                <ListItem>Enzyme</ListItem>
                <ListItem>Chai</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>React Testing Library</ListItem>
              </UnorderedList>
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

//   return (
//     <div>
//       <div className="container-fluid main">
//         <div className="row  height-100">
//           <div className="col">
//             <h2 className="text-center mb-4">
//               <strong>Skills</strong>
//             </h2>

//             <div className="row">
//               <div className="col-md-6 text-center skills-box">

//               <div className="col-md-6 text-center skills-box">
//                 <i className="fa fa-picture-o fa-4x" />
//                 <h4>Design</h4>

//                 <ul className="text-left">
//                   <li>Adobe Photoshop</li>
//                   <li>Responsive Design</li>
//                   <li>PSD to HTML/CSS</li>
//                 </ul>
//               </div>

//               <div className="col-md-6 text-center skills-box">
//                 <i className="fa fa-database fa-4x" />
//                 <h4>Databases</h4>

//                 <ul className="text-left">
//                   <li>PostgreSQL</li>
//                   <li>Microsoft SQL Server</li>
//                 </ul>
//               </div>

//               <div className="col-md-6 text-center skills-box">
//                 <i className="fa fa-check-square-o fa-4x" />
//                 <h4>Testing</h4>

//                 <ul className="text-left">
// <li>Mocha</li>
// <li>Enzyme</li>
// <li>Chai</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
