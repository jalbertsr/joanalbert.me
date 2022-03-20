import { Container, Heading, Center } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const Travel = () => (
  <Layout title="Travel">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Travel
      </Heading>
      <Center h="100px" color="white">
        Building a world map, work in progress...
      </Center>
    </Container>
  </Layout>
);

export default Travel;
export { getServerSideProps } from '../components/chakra';
