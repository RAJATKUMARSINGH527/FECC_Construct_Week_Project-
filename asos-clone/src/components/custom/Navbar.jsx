import React from "react";
import { Box, Flex, Input, Button, Image, IconButton, HStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu"
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Box bg="#2d2d2d" color="white" >
      <Flex>
        <Image
          marginLeft="20"
          cursor="pointer"
          marginTop="20px"
          _hover={{
            filter: "invert(0.95)"
          }}
          height="20px"
          color="white"
          filter="invert(1)"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN5bWJvbCBpZD0iYSIgdmlld0JveD0iMCAwIDIzIDI0Ij48cGF0aCBkPSJNNS4wNzYgMTIuMDE3YzAtMy44MTQgMi4zMjgtNy41MDkgNi41MjEtNy41MDkgNC4xOTQgMCA2LjUyMiAzLjY5NSA2LjUyMiA3LjUxIDAgMTAuMDk4LTEzLjA0MyAxMC4wOTUtMTMuMDQzIDBabTE3LjkxOC03LjUyMVYuNjAzaC00Ljg3NXYxLjUxNEMxNi4xMjcuNjgzIDEzLjk2Ny4wMTMgMTEuNjMgMGgtLjAzM0wxMS41NjQgMEM4Ljc0Mi4wMTYgNi4xNzguOTg4IDMuODU3IDMuMTEgMi41OCA0LjI5MSAxLjYwNyA1LjYzNS45NjQgNy4xMTQuMzI3IDguNTg4IDAgMTAuMjM5IDAgMTIuMDE1YzAgMS42NTguMjg4IDMuMjExLjg1MyA0LjYxNi41NjYgMS40MDUgMS40MjYgMi43MDUgMi41NiAzLjg2MyAxLjEzNCAxLjE2IDIuNDAxIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N2guMDVsLjA0OS4wMDFjMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY5LS44NzEuNzMtLjMxIDEuNDMzLS43MDcgMi4xMDMtMS4xODd2MS40NTVoNC44NzVWNC40OTZaIi8+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iMCAwIDU3IDI0Ij48cGF0aCBkPSJNNTAuOTY0IDE5LjMxNmMtMS4wMTggMS4wMDktMy40OTUgMS40MDUtNS4yODIuMjUxLTEuMDYtLjY4NC0xLjgwMS0xLjkxMy0xLjc5OC0zLjE5OGwtNC41NTktLjAwMmMuNDk4LTEuMzM1Ljc1LTIuNzk4Ljc1LTQuMzUyIDAtLjM0OC0uMDEyLS42OS0uMDM3LTEuMDI4LjMuMzc2LjY1MS43MjEgMS4wNTggMS4wMjIgMi40OTUgMS44MzMgNS42NSAxLjcyNiA4LjQwNSAyLjg2Ny42NDQuMjY3IDEuMjgzLjYxOSAxLjcwNSAxLjE4Ni44NiAxLjE1OS44MDYgMi4yMTUtLjI0MiAzLjI1NFptLTI5LjAwNy03LjI5OWMwLTMuODE0IDIuMzI4LTcuNTEgNi41MjEtNy41MVMzNSA4LjIwNCAzNSAxMi4wMThjMCAxMC4xLTEzLjA0MiAxMC4wOTYtMTMuMDQyIDBabS02LjEzNi0uMDAzYy0yLjQ5NS0xLjgzMy01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjItMS43MDUtMS4xODctLjcwMy0uOTQ2LS41OTMtMi40MjcuMjQxLTMuMjUzIDEuMDE1LTEuMDA2IDMuNDkyLTEuNDA4IDUuMjgyLS4yNTIgMS4wNi42ODUgMS44MDIgMS45MTQgMS43OTggMy4xOThsNC41OTYuMDAyYy0uNDk0IDEuMzMzLS43NDcgMi43OTgtLjc0NyA0LjM1OSAwIC4zNjMuMDE1LjcyMi4wNDIgMS4wNzVhNS42OTIgNS42OTIgMCAwIDAtMS4xMDItMS4wNzZaTS4xOTQgOS41NDhhNS43MzMgNS43MzMgMCAwIDAgMS45IDIuNDY2YzIuNDk1IDEuODMzIDUuNjUgMS43MjUgOC40MDUgMi44NjcuNjQ1LjI2NyAxLjI4NC42MTggMS43MDUgMS4xODYuNzAzLjk0Ni41OTMgMi40MjctLjI0MiAzLjI1My0xLjAxNyAxLjAxLTMuNDk1IDEuNDA2LTUuMjgxLjI1Mi0xLjA2LS42ODUtMS44MDItMS45MTMtMS43OTgtMy4xOThsLTQuNjg5LS4wMDJtMCAyLjI3OGMuNDk0IDEuMzkxIDEuMzc1IDIuNjQgMi41MzIgMy41MjYgMi4xNDkgMS42NDcgNS4wMDggMS45OCA3LjY4MyAxLjc2NSAxLjY0OC0uMTMyIDMuMzE3LS40NjQgNC43NDUtMS4zMTcgMS43ODUtMS4wNjcgMi44MzYtMy4wMiAzLjAxNi01LjA0M2ExMi4xMiAxMi4xMiAwIDAgMCAyLjEyNCAyLjkxM2MxLjEzNCAxLjE2IDIuNDAyIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N3YuMDAxaC4wOTljMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY4LS44NzEgMS4zNjUtLjU3OCAyLjYzMy0xLjQ2IDMuNzY2LTIuNjJhMTIuMDc4IDEyLjA3OCAwIDAgMCAyLjIwNy0zLjA3NWMuMzM3IDEuODcyIDEuMzcgMy42MTIgMi44NTggNC43NTMgMi4xNSAxLjY0NyA1LjAwOCAxLjk4IDcuNjgzIDEuNzY1IDIuMDc4LS4xNjggMy4yNi0uNDMgNC43NDYtMS4zMTggMy42Mi0yLjE2MyA0LjIyLTcuOTc1LjY2Ni0xMC42MS0yLjQ5NS0xLjgzMi01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjE5LTEuNzA1LTEuMTg2LS43MDItLjk0Ny0uNTkyLTIuNDI3LjI0Mi0zLjI1NCAxLjAxNS0xLjAwNiAzLjQ5Mi0xLjQwOCA1LjI4Mi0uMjUyIDEuMDYuNjg1IDEuODAxIDEuOTE0IDEuNzk4IDMuMTk4bDUuMTMuMDAzYy0uMDg1LTIuMjU4LTEuMjA4LTQuNDUyLTIuOTczLTUuODA1QzUyLjA0LjIgNDkuMTgyLS4xMzMgNDYuNTA4LjA4MiA0NC44Ni4yMTUgNDMuMTkuNTQ3IDQxLjc2MiAxLjRjLTEuNzc4IDEuMDYyLTIuODE1IDIuOTgtMy4wMSA0Ljk3LS42MjUtMS4xODgtMS40NzMtMi4yOC0yLjUzMy0zLjI2QzMzLjg5OC45ODcgMzEuMzM0LjAxNSAyOC41MSAwaC0uMDY2Yy0yLjgyMi4wMTYtNS4zODYuOTg4LTcuNzA3IDMuMTEtMS4xNDYgMS4wNi0yLjA0NCAyLjI0OS0yLjY4MSAzLjU1LS4zMjctMS44OTMtMS4zNjUtMy42NTYtMi44NjgtNC44MDhDMTMuMDQuMjA1IDEwLjE4MS0uMTI4IDcuNTA2LjA4NyA1Ljg1OC4yMiA0LjE5LjU1IDIuNzYgMS40MDUgMS41NTIgMi4xMjcuNjg2IDMuMjQ0LjE5NCA0LjUxIi8+PC9zeW1ib2w+PHVzZSBocmVmPSIjYSIgd2lkdGg9IjIzIi8+PHVzZSBocmVmPSIjYiIgeD0iMjIuOCIgd2lkdGg9IjU3Ii8+PC9zdmc+"
          alt="ASOS Logo" />

        <Flex gap="4">
          <Button
            p="30px"
            marginLeft="10"
            borderLeft="0.5px solid grey"
            borderRight="0.5px solid grey"
            variant="link"
            fontSize="17px"
            colorScheme="whiteAlpha"
            borderRadius="none"
            fontFamily="futura-pt, FuturaStd, Helvetica, Arial, sans-serif;"
            fontWeight="700"
            _hover={{
              bg: "gray.700",
              transition: "color 0.3s ease",
            }}
            letterSpacing="2px">
            WOMEN
          </Button>

          <Button
            variant="link"
            p="30px 45px"
            marginLeft="-4"
            borderRight="0.3px solid grey"
            borderRadius="none"
            fontSize="17px"
            colorScheme="whiteAlpha"
            fontFamily="futura-pt, sans-serif;"
            fontWeight="700"
            _hover={{
              bg: "gray.700",
              transition: "color 0.3s ease",
            }}
            letterSpacing="2px">
            MEN
          </Button>

        </Flex>

        <Flex mt="3">
          <Input
            placeholder="Search for items and brands"
            width="750px"
            bg="white"
            paddingLeft="15px"
            color="Darkgrey"
            borderRadius="full"
            marginLeft="10"


          />
          <IconButton
            variant="ghost"
            bg="none"
            color="black"
            size="md"
            marginLeft="-10"
            aria-label="Search database"
          >
            <LuSearch />
          </IconButton>

          <IconButton
            filter="Invert(1)"
            w="40px"
            h="40px"
            bg="none"
            marginLeft="5"
          >
            <FaUser />
          </IconButton>

          <IconButton
            filter="Invert(1)"
            w="40px"
            h="40px"
            bg="none"
            marginLeft="3"
          >
            <FaHeart />
          </IconButton>

          <IconButton
            filter="Invert(1)"
            w="40px"
            h="40px"
            bg="none"
            marginLeft="3"
          >
            <FaShoppingBag />
          </IconButton>

        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

