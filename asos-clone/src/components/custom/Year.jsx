import {Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Year=()=>{
  return(

    <Box bg="#dddddd" color="grey" p="4" padding="0px 32px">
        
        <Flex gap="10" display="flex" justifyContent="flex-end">
            <Text color="#666666" fontSize="12px" padding="12px" >© 2024 ASOS</Text>
            <Text color="#666666" fontSize="12px" padding="12px">
                Privacy & Cookies
            </Text>
            <Text color="#666666" fontSize="12px" padding="12px">
                Ts&Cs       
            </Text>
            <Text color="#666666" fontSize="12px" padding="12px" >Accessibility</Text>
            {/* <Image src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="Indian Flag" /> */}
        </Flex>
</Box>
  )
}

export default Year;