import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Help = () => {
  return (

    <Box bg="#f8f8f8" color="grey" p="4" padding="0px 32px">

      <Flex gap="10" display="flex" justifyContent="flex-end" marginRight="65px">

        <Text
          color="#666666"
          fontSize="13px"
          cursor="pointer"
          padding="6px 20px"
          borderLeft="0.2px solid grey"
          borderRight="0.2px solid grey"
          _hover={{
            color: "blue",
            transition: "color 0.3s ease",
          }}
        >
          Marketplace
        </Text>

        <Text
          color="#666666"
          fontSize="13px"
          marginLeft="-10"
          cursor="pointer"
          padding="6px 20px"
          borderRight="0.2px solid grey"
          _hover={{
            color: "blue",
            transition: "color 0.3s ease",
          }}
        >
          Help & FAQs
        </Text>

        <Flex  
          
          borderRight="0.2px solid grey"
          padding="0px 20px"
          marginLeft="-10"
          
        >
          <Image
            outline="1px solid currentColor"
            mt="10px" 
            cursor="pointer" 
            borderRadius="50%"
            height="13px"
            _hover={{
              outline:"1px solid blue",
              transition: "color 0.8s ease",
            }}
            width="13px"
            src="https://assets.asosservices.com/storesa/images/flags/in.png" 
            alt="Indian Flag" 
          />
         </Flex>
      </Flex>
    </Box>
  )
}

export default Help;