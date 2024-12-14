import React from "react";
import { Button, Flex, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex position="relative">
      
      <Image
        src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/dec-2024/generic-hp/new-desktop-assets/eng_generic_desktop_1440x698.jpg"
        alt="this is asos"
        width="100%"
        height="auto"
        objectFit="cover"
      />
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        direction="column"
        align="center"
        gap="4"
        color="white"
        padding="4"
      >
        <Flex gap="4">
          <Button
            bg="white"
            color="black"
            fontSize="16px"
            p="9px 14px"
            letterSpacing="2px"
            minWidth="184px"
            minHeight="44px"
            fontWeight="700"
            fontFamily="futura-pt, FuturaStd, Helvetica, Arial, sans-serif"
            borderRadius="none"
            _hover={{
              bg: "black",
              color: "white",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            SHOP WOMENS
          </Button>

          <Button
            bg="white"
            color="black"
            fontSize="16px"
            p="9px 14px"
            letterSpacing="2px"
            minWidth="184px"
            minHeight="44px"
            fontWeight="700"
            fontFamily="futura-pt, FuturaStd, Helvetica, Arial, sans-serif"
            borderRadius="none"
            _hover={{
              bg: "black",
              color: "white",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            SHOP MENS
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
