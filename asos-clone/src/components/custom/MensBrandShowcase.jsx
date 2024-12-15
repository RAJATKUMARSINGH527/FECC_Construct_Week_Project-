import React from "react";
import { Box,defaultBaseConfig,Grid,Image } from "@chakra-ui/react";


const MensBrandShowcase=()=>{
    const MensBrands=[
        {
            name: "Adidas", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_02---v2.jpg" 
        },
        {
            name: "New Balance", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_01.jpg"
        },
        {
            name: "ASOS Design", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_03.jpg"
        },
        {
            name: "Topman", image: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_04.jpg"
        }
    
    ]

    return(

        <Box  p="4" marginTop="90px">
            <Grid templateColumns="repeat(4,1fr)" gap="7">
                {MensBrands.map((brand,el)=>(
                    <Box key={el} cursor="pointer">
                        <Image src={brand.image} alt={brand.name} />
                    </Box>

                ))}
                
            </Grid>
        </Box>


    )

}

export default MensBrandShowcase;