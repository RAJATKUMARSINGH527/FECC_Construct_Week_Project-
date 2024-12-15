import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const SocialCards = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath fill='%233C5A99' fill-rule='evenodd' d='M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm6.075-21.75H8.925c-.341 0-.675.334-.675.675v12.15c0 .341.333.675.675.675H15v-5.4h-1.35v-2.025H15v-1.35c.46-1.737 1.526-2.686 2.7-2.7 1.126.014 1.767.07 2.025 0V12.3h-1.35c-.646-.108-.81.294-1.35.675v1.35h2.7l-.675 2.025h-2.025v5.4h4.05c.341 0 .675-.334.675-.675V8.925c0-.341-.334-.675-.675-.675z'/%3E%3C/svg%3E",
    },
    {
      name: "Instagram",
      icon: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath fill='%238433B7' fill-rule='evenodd' d='M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-21.147c2.002 0 2.24.008 3.03.044.73.033 1.128.155 1.392.258.35.136.6.299.862.561.262.262.425.512.56.862.104.264.226.661.259 1.392.036.79.044 1.028.044 3.03s-.008 2.24-.044 3.03c-.033.73-.155 1.128-.258 1.392-.136.35-.299.6-.561.862a2.323 2.323 0 0 1-.862.56c-.264.104-.661.226-1.392.259-.79.036-1.028.044-3.03.044s-2.24-.008-3.03-.044c-.73-.033-1.128-.155-1.392-.258-.35-.136-.6-.299-.862-.561a2.323 2.323 0 0 1-.56-.862c-.104-.264-.226-.661-.259-1.392-.036-.79-.044-1.028-.044-3.03s.008-2.24.044-3.03c.033-.73.155-1.128.258-1.392.136-.35.299-.6.561-.862a2.31 2.31 0 0 1 .862-.56c.264-.104.661-.226 1.392-.259.79-.036 1.028-.044 3.03-.044zm0-1.35c-2.036 0-2.292.008-3.091.044-.798.037-1.343.164-1.82.349a3.675 3.675 0 0 0-1.328.865 3.675 3.675 0 0 0-.865 1.328c-.185.477-.312 1.022-.349 1.82-.036.8-.045 1.055-.045 3.091 0 2.036.009 2.292.045 3.091.037.798.164 1.343.349 1.82.192.493.448.911.865 1.328a3.68 3.68 0 0 0 1.328.865c.477.185 1.022.312 1.82.349.8.036 1.055.045 3.091.045 2.036 0 2.292-.009 3.091-.045.798-.037 1.343-.164 1.82-.349a3.675 3.675 0 0 0 1.328-.865 3.68 3.68 0 0 0 .865-1.328c.185-.477.312-1.022.349-1.82.036-.8.045-1.055.045-3.091 0-2.036-.009-2.292-.045-3.091-.037-.798-.164-1.343-.349-1.82a3.675 3.675 0 0 0-.865-1.328 3.675 3.675 0 0 0-1.328-.865c-.477-.185-1.022-.312-1.82-.349-.8-.036-1.055-.045-3.091-.045zm0 3.647a3.85 3.85 0 1 0 0 7.7 3.85 3.85 0 0 0 0-7.7zm0 6.35a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm4.902-6.502a.9.9 0 1 0-1.8 0 .9.9 0 0 0 1.8 0z'/%3E%3C/svg%3E",
    },
    {
      name: "Snapchat",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png",
    },
  ];

  return (
    <Box 
        mt="10" 
        borderTopWidth="thin" 
        borderColor="rgba(128, 128, 128, 0.2)" 
        borderWidth="1px" 
        padding="15px">

      <Flex gap="10" justifyContent="center">

        {socialMedia.map((social, index) => (
          <Image
            key={index}
            cursor="pointer"
            h="30px"
            w="30px"
            borderRadius="50%"
            _hover={{
              transform: "scale(1.1)",
              transition: "0.2s",
              border: "1px solid blue",
            }}
            src={social.icon}
            alt={social.name}
          />
        ))}

        <Box
          position="relative"
          _before={{
            content: '"|"',
            position: "absolute",
            top: "3",
            height:"30px",
            width: "1px",
            transform: "translateY(-50%)",
            color: "#666666",
            fontSize: "24px",
          }}
        >
          <Image mt="2" h="20px" ml="12" src="https://images.asos-media.com/navigation/visa-png" alt="VISA" />
        </Box>

        <Image mt="2" h="20px" src="https://images.asos-media.com/navigation/mastercard-png" alt="Mastercard" />
        <Image mt="2" h="20px" src="https://images.asos-media.com/navigation/pay-pal-png" alt="PayPal" />
        <Image mt="2" h="20px" src="https://images.asos-media.com/navigation/american-express-png" alt="American Express" />
        <Image mt="2" h="20px" src="https://images.asos-media.com/navigation/visa-electron-png" alt="VISA Electron" />

      </Flex>
    </Box>
  );
};

export default SocialCards;
