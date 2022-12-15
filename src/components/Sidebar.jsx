import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FiSettings, FiList } from "react-icons/fi";

const Sidebar = () => {
  let navigate = useNavigate();

  return (
    <Flex
      position="fixed"
      height="100%"
      flexDir="column"
      gap={10}
      width="10rem"
      ml="2rem"
      mt="4rem"
    >
      <Button
        bg="none"
        size="md"
        width={130}
        height={10}
        fontSize="2xl"
        fontWeight="bold"
        leftIcon={<FiSettings />}
        onClick={() => navigate("/customise")}
      >
        Actions
      </Button>
      <Button
        bg="none"
        size="md"
        width={130}
        height={10}
        fontSize="2xl"
        fontWeight="bold"
        leftIcon={<FiList />}
        onClick={() => navigate("/to-do-list")}
      >
        <Text textAlign="left" mr={6}>
          Todo
        </Text>
      </Button>
    </Flex>
  );
};

export default Sidebar;
