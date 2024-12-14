import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box textAlign="center" p="4">
      <Link to="/products"></Link>
    </Box>
  );
};

export default Home;
