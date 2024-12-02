"use client"
import React from "react";
import { Box, Heading, Flex, Text, Button, Icon, useDisclosure, Stack } from "@chakra-ui/react";
import { MdAndroid } from "react-icons/md"


const LandingNav: React.FC = (props) => {
  const { open, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (open ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      // bg="teal.500"
      // color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Mahoo Check
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <Icon>
        <MdAndroid />
        </Icon>
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: open ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={2}
        mt={{ base: 8, md: 0 }}
      >
        <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Stack>

      <Box
        display={{ base: open ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          // _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button>
      </Box>
    </Flex>
  );
};

export default LandingNav;