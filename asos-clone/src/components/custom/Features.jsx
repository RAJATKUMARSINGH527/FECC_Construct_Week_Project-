import React from "react";
import { Grid, Box, Image } from "@chakra-ui/react";

const Features = () => {
    const feature = [
        { name: "New User", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/uk/2024_landing_page_propositions_01_870x555.jpg" },
        { name: "download app", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/uk/2024_landing_page_propositions_02_870x555.jpg" },
        { name: "Worldwide delivery", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/ca/2024_landing_page_propositions_03_ca_870x555.jpg" },
        { name: "Easy Return", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/june-2024/eng-speaking/propositions/ca/2024_landing_page_propositions_04_870x555.jpg" },
    ];




    return (
        <Box p="4" marginTop="15px">
            <Grid templateColumns="repeat(4, 1fr)" gap="7">
                {feature.map((brand, index) => (
                    <Box key={index} textAlign="center" cursor="pointer">
                        <Image src={brand.image} alt={brand.name} />
                    </Box>
                ))}
            </Grid>
        </Box>
    );


};

export default Features;
