import React, { useState, useEffect } from 'react';
import { Box, Checkbox, VStack } from '@chakra-ui/react';

const DynamicFilterBar = ({ products, onFiltered }) => {
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    sale: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  useEffect(() => {
    const activeFilters = Object.keys(filters).filter(
      (filter) => filters[filter]
    );
    const filteredProducts = products.filter((product) =>
      activeFilters.some((filter) => product.category === filter)
    );
    onFiltered(filteredProducts);
  }, [filters, products, onFiltered]);

  return (
    <VStack align="start" spacing="4" p="4" bg="gray.50" borderRadius="lg">
      <Box fontWeight="bold" fontSize="lg">
        Filters
      </Box>
      {Object.keys(filters).map((filter) => (
        <Checkbox
          key={filter}
          isChecked={filters[filter]}
          onChange={() => handleFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default DynamicFilterBar;
