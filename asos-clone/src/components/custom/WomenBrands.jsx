import React from "react";
import { Box, Button } from "@chakra-ui/react";

const WomenBrand = () => {
    return (
        <Box textAlign="center" marginTop="90px">
            <Button
                border="2px solid black"
                color="black"
                cursor="pointer"
                padding="30px 60px"
                fontSize="16px"
                letterSpacing="2px"
                fontWeight="700"
                fontFamily="futura-pt, FuturaStd, Helvetica, Arial, sans-serif"
                borderRadius="none"
                overflow="hidden"
                _hover={{
                    bg: "black",
                    color: "white",
                    transform: "scale(0.99)", // Shrinks the button slightly
                    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                }}
            >
                <Box
                    as="span"
                    display="inline-block"
                    transform="scale(1)"
                    _groupHover={{
                        transform: "scale(1.1)", // Slightly enlarges inner content
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    SHOP WOMEN'S<br />BRANDS
                </Box>
            </Button>
        </Box>
    );
};

export default WomenBrand;
