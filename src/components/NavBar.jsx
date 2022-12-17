import { HStack , Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <HStack top={0} position="fixed" bg="rgb(0, 0, 0, 0.1)">
      <Link to="/to-do-list">
        <Button bg="transparent">Tasks</Button>
      </Link>
      <Link to="/customise">
        <Button bg="transparent">Customise</Button>
      </Link>
    </HStack>
  );
};

export default BottomBar;
