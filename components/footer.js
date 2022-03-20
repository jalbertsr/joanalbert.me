import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      Based in&nbsp;
      <Link href="https://www.craftz.dog/" isExternal>Takuya Matsuyama&apos;s</Link>
      &nbsp;Hompage
    </Box>
  );
};

export default Footer;
