import React from "react";
import { Grid, Box, Image } from "@chakra-ui/react";

const WomensBrandShowcase = () => {
  const brands = [
    { name: "Adidas", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_02---v2.jpg" },
    { name: "Mango", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_04.jpg" },
    { name: "ASOS Design", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_01.jpg" },
    { name: "Topshop", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_03.jpg" },
  ];

  return (
    <Box p="4" marginTop="20px">
      <Grid templateColumns="repeat(4, 1fr)" gap="7">
        {brands.map((brand, index) => (
          <Box key={index} cursor="pointer">
            <Image src={brand.image} alt={brand.name} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default WomensBrandShowcase;
