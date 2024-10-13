import NextLink from 'next/link';
import Image from 'next/image';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Software Engineer based in Barcelona!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joan Albert
          </Heading>
          <p>Digital Craftsman ( Developer & Freethinker )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/profile.png"
              alt="Profile image"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Joan Albert is a freelance and a full-stack developer based in
          Barcelona with a passion for building digital services/stuff he wants.
          He has a knack for solving real-life problems with code. When not
          online, he loves traveling or practicing some extreme sport.
          Currently, he co-founded his own company,&nbsp;
          <Link href="https://swipoo.com/" isExternal>
            Swipoo
          </Link>
          ,&nbsp;and he&apos;s leading the engineering team as a CTO.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            rightIcon={<ChevronRightIcon />}
            href="/works"
            scroll={false}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Barcelona, Catalonia, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Enrolled in the&nbsp;
          <Link href="https://www.uab.cat/" isExternal>
            UAB
          </Link>
          &nbsp;Computer Engineering Degree.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Work @&nbsp;
          <Link href="https://kiwi.com/" isExternal>
            Kiwi.com
          </Link>
          &nbsp;- Fullstack Developer
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Work @&nbsp;
          <Link href="https://www.manomano.fr/" isExternal>
            ManoMano
          </Link>
          &nbsp;- Fullstack Developer
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Work @&nbsp;
          <Link href="https://www.capchase.com/" isExternal>
            Capchase
          </Link>
          &nbsp;- Software Engineer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Travelling, Coding, Food (😋), Sports, Learning and exploring (about
          anything)
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jalbertsr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jalbertsr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/joanalbertsr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @joanalbertsr
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            rightIcon={<ChevronRightIcon />}
            href="#"
            scroll={false}
            colorScheme="teal"
          >
            Popular posts
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
