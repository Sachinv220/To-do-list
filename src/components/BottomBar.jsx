import {
  Box,
  List,
  ListItem,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import { Link } from "react-router-dom";

const BottomBar = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<BiMoon />, <FiSun />);
  return (
    <>
      <Box
        overflowX="auto"
        position="fixed"
        bottom={0}
        mr={0}
        width="100%"
        zIndex={10}
      >
        <List float="left" display="inline" width="49%" height={50}>
          <ListItem
            float="left"
            display="inline"
            width="5rem"
            mt={12.5}
            mr={1}
            bgColor="blue.400"
          >
            <Link to="/to-do-list" float="left" display="block">
              <Text cursor="pointer" pl={3} fontWeight="bold" fontSize="xl">
                To-do
              </Text>
            </Link>
          </ListItem>
          <ListItem mt={12.5} borderRadius={16} bgColor="blue.400">
            <Link to="/customise">
              <Text cursor="pointer" fontWeight="bold" fontSize="xl">
                Actions
              </Text>
            </Link>
          </ListItem>
        </List>
        <IconButton
          float="right"
          mr={3}
          icon={icon}
          onClick={toggleColorMode}
        />
      </Box>
      <Box position="fixed" height={10} top={0} width="100%">
        {children}
      </Box>
    </>
  );
};

export default BottomBar;
