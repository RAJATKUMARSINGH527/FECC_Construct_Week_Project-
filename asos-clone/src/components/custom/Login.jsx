import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock logic for login
    if (email === 'user@example.com' && password === 'password') {
      alert('Login Successful!');
      navigate('/');
    } else {
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="6" boxShadow="lg" borderRadius="lg">
      <Heading as="h1" size="lg" textAlign="center" mb="6">
        Login
      </Heading>
      <VStack spacing="4" align="stretch">
        <Box>
          {/* <FormLebel>Email Address</FormLebel> */}
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          {/* <FormLebel>Password</FormLebel> */}
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
        <Text textAlign="center">
          Don't have an account? <Button variant="link" colorScheme="teal" onClick={() => navigate('/signup')}>Sign Up</Button>
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;
