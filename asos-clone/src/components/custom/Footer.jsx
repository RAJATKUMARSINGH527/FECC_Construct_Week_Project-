import { Box, Grid, GridItem, Text, Link, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const textColor = "#666666";
  const block = "block"
  const marginTop = "15px"
  const fontSize = "12px"


  return (
    <Box bg="#EEEEEE" p="6">
      <Grid marginLeft="100px" templateColumns="repeat(4, 1fr)" gap="4" marginTop="10px">
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
          <Text
            fontSize="14px"
            letterSpacing="2px"
            fontWeight="bold"
          >
            SHOPPING FROM:
          </Text>


          <Flex>

            <Text
              fontSize={fontSize}
              color={textColor}
              marginTop={marginTop}
            > You're in
            </Text>

            <Image
              margin="10px"
              mt="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              width="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
         
              src="https://assets.asosservices.com/storesa/images/flags/in.png"
              alt="Indian Flag"
            />
            <Link
              textDecoration="none"
              fontWeight="bold"
              fontSize="14px"
              mt="2"
              letterSpacing="2px"
              color={textColor}
              href="#"
              _hover={{
                color: "blue",
                _before: {
                  color: "blue",
                },

              }}
              _before={{
                content: '"|"',
                marginRight: "4px",
                color: textColor,
                width: "2px",
               
                
              }}
            >
              CHANGE
            </Link>

          </Flex>



          <Text
            fontSize={fontSize}
            marginTop={marginTop}
            color={textColor}
          >
            Some of our international sites:
          </Text>

          <Flex mt="1">
            <Image
              margin="10px"
              mt="13px"
              ml="13px"
              cursor="pointer"
              borderRadius="50%"
              height="14px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="14px"
              src="https://assets.asosservices.com/storesa/images/flags/es.png"
              alt="Indian Flag"
            />

            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/de.png"
              alt="Indian Flag"
            />

            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/au.png"
              alt="Indian Flag"
            />

            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/fr.png"
              alt="Indian Flag"
            />
            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/us.png"
              alt="Indian Flag"
            />
            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/dk.png"
              alt="Indian Flag"
            />
            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/it.png"
              alt="Indian Flag"
            />
          </Flex>

          <Flex>
            <Image
              margin="10px"
              mt="13px"
              ml="13px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/nl.png"
              alt="Indian Flag"
            />
            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/pl.png"
              alt="Indian Flag"
            />
            <Image
              margin="10px"
              mt="13px"
              ml="18px"
              cursor="pointer"
              borderRadius="50%"
              height="13px"
              _hover={{
                outline: "1px solid blue",
                transition: "color 0.8s ease",
              }}
              width="13px"
              src="https://assets.asosservices.com/storesa/images/flags/se.png"
              alt="Indian Flag"
            />
          </Flex>

        </GridItem>
      </Grid>
    </Box>

  );
};

export default Footer;
