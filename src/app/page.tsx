'use client';

import { Link } from '@chakra-ui/next-js';

const Home = () => {
  return (
    <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
      About
    </Link>
  );
};

export default Home;
