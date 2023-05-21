/** @format */

import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      gap={10}
      position="fixed"
      bg="rgb(0, 0, 0, 0.2)"
      width="100%"
      backdropFilter="blur(16px)"
      zIndex={10}
      boxShadow="0 8px 32px 0 rgba( 0,0,0,);"
    >
      <Link to="/to-do-list">
        <Button bg="transparent">Tasks</Button>
      </Link>
      <Link to="/customise">
        <Button bg="transparent">Customise</Button>
      </Link>
    </Flex>
  );
};

export default NavBar;
