import {
  Stack,
  Flex,
  ListItem,
  List,
  Icon,
  useMediaQuery,
  useColorModeValue,
  useColorMode,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";

import BottomBar from "./BottomBar";

const Sidebar = ({ children }) => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");
  const textColor = useColorModeValue("black", "blue.100");
  const hoverColor = useColorModeValue("blue.100", "blue.800");
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<BiMoon />, <FiSun />);

  const Sidebar = (
    <>
      <Stack position="fixed" height="100%" width="10rem">
        <Flex alignItems="center" justifyContent="center">
          <List mt="5rem" textColor={textColor}>
            <ListItem
              borderWidth={3}
              p={1}
              className="list"
              width="6em"
              fontWeight="bold"
              rounded={15}
              _hover={{
                bgColor: hoverColor,
                borderColor: hoverColor,
              }}
              fontSize="2xl"
              mb={3}
              borderColor="transparent"
            >
              <Icon as={IoMdSettings} verticalAlign="middle" mr={1} />
              <Link to="/customise">Actions</Link>
            </ListItem>
            <ListItem
              borderWidth={3}
              className="list"
              width="6em"
              fontWeight="bold"
              rounded={15}
              _hover={{
                bgColor: hoverColor,
                borderColor: hoverColor,
              }}
              fontSize="2xl"
              mb={3}
              borderColor="transparent"
            >
              <Icon as={FaClipboardList} verticalAlign="middle" mr={1} />
              <Link to="/to-do-list">To-do</Link>
            </ListItem>
          </List>
        </Flex>
      </Stack>
      <Box p={4} float="right">
        <IconButton icon={icon} onClick={toggleColorMode} />
      </Box>
      <Stack position="fixed" width="100%" bottom={0}>
        {children}
      </Stack>
    </>
  );
  return <>{isSmallerThan850 ? <BottomBar children={children} /> : Sidebar}</>;
};

export default Sidebar;
