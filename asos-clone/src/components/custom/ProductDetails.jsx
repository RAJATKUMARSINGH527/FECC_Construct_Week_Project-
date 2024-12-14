import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  return (
    <Box p="4">
      <Image src={product.image} alt={product.name} />
      <Text fontSize="2xl" fontWeight="bold" mt="4">
        {product.name}
      </Text>
      <Text color="gray.600" mt="2">
        ${product.price}
      </Text>
      <Text mt="4">{product.description}</Text>
      <Button colorScheme="teal" mt="4">
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductDetails;
