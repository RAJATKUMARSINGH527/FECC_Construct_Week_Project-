import {Box, Flex, Text,Image } from "@chakra-ui/react";
import React from "react";

const Year=()=>{
  return(

    <Box bg="#dddddd" color="grey" p="4" >

        <Text 
          ml="100px"
          color="#666666" 
          fontSize="12px" 
        > 
          © 2024 ASOS
        </Text>

        <Flex gap="4" display="flex" justifyContent="flex-end" mr="100px" mt="-5">
            
            <Text 
              color="#666666" 
              fontSize="12px" 
            >
              Privacy & Cookies
            </Text>

            <Text 
              color="#666666" 
              fontSize="12px" 
              _before={{
                content: '"|"',
                marginRight: "15px",
                color: "#666666",
                width: "2px",
              }}
            >
                Ts&Cs       
            </Text>
            <Text 
              color="#666666" 
              fontSize="12px" 
              _before={{
                content: '"|"',
                marginRight: "15px",
                color: "#666666",
                width: "2px",
              }}
            >
              Accessibility
            </Text>
            
        </Flex>
</Box>
  )
}

export default Year;