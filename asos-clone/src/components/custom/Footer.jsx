import { Box, Grid, GridItem, Text, Link, Flex, Image} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const textColor = "#666666";
  const block="block"
  const marginTop="10px"
  const fontSize="12px"

  return (
    <Box bg="#EEEEEE" p="6" marginTop="100px">
      <Grid marginLeft="100px" templateColumns="repeat(4, 1fr)" gap="4"  marginTop="10px">
        <GridItem color={textColor}>
          <Text fontSize="14px" fontWeight="bold" letterSpacing="2px">HELP & INFORMATION</Text>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Help</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Track Order</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Delivery & Returns</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Sitemap</Link>
        </GridItem>
        <GridItem color={textColor}>
          <Text fontSize="14px" fontWeight="bold" letterSpacing="2px">ABOUT ASOS</Text>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">About Us</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Careers at ASOS</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Corporate Responsibility</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Investor's Site</Link>
        </GridItem>
        <GridItem color={textColor}>
          <Text fontSize="14px" fontWeight="bold" letterSpacing="2px">MORE FROM ASOS</Text>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Mobile and ASOS apps</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">ASOS Marketplace</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Gift Vouchers</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Black Friday</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">ASOS x Thrift+</Link>
          <Link display={block} color={textColor} marginTop={marginTop} fontSize={fontSize} href="#">Discover the ASOS Credit Card</Link>
        </GridItem>
        <GridItem color={textColor}>
          <Text fontSize="14px" letterSpacing="2px" fontWeight="bold">SHOPPING FROM:</Text>
          <Text fontSize={fontSize} color={textColor} marginTop={marginTop} >You're in 🌎 | <Link display="inline" fontWeight="bold" color={textColor} href="#">Change</Link></Text>
          <Flex mt="2">
            <Text fontSize={fontSize} marginTop={marginTop} color={textColor}>Some of our international sites: </Text>
            <Image/>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
      
  );
};

export default Footer;
