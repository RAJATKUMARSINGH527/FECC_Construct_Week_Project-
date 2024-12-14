import React, { useState } from 'react';
import { Box, Button, Input,  Heading, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // Mock signup logic
      alert('Signup successful! Please login.');
      navigate('/login');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="6" boxShadow="lg" borderRadius="lg">
      <Heading as="h1" size="lg" textAlign="center" mb="6">
        Sign Up
      </Heading>
      <VStack spacing="4" align="stretch">
        <Box>
          {/* <Label>Email Address</Label> */}
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
        <Button colorScheme="teal" onClick={handleSignup}>
          Sign Up
        </Button>
        <Text textAlign="center">
          Already have an account? <Button variant="link" colorScheme="teal" onClick={() => navigate('/login')}>Login</Button>
        </Text>
      </VStack>
    </Box>
  );
};

export default Signup;
