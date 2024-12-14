import React, { useState } from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import ProductCard from '../components/custom/ProductCard';
import FilterBar from '../components/custom/FilterBar';

const Products = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <Flex>
      <FilterBar products={products} onFiltered={setFilteredProducts} />
      <Grid templateColumns="repeat(3, 1fr)" gap="6" p="4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Products;
