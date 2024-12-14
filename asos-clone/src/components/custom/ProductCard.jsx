import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Image src={product.image} alt={product.name} />
      <Text fontWeight="bold" mt="2">
        {product.name}
      </Text>
      <Text color="gray.600">${product.price}</Text>
      <Button colorScheme="teal" mt="4">
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
