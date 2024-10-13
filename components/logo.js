import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import FootprintIcon from './icons/footprint';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor: pointer;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => (
  <Link href="/" scroll={false} passHref>
    <LogoBox>
      <FootprintIcon />
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='M PLUS Rounded 1c", sans-serif'
        fontWeight="bold"
        ml={3}
      >
        Joan Albert
      </Text>
    </LogoBox>
  </Link>
);

export default Logo;
