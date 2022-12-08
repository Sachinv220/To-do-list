import {
  Stack,
  Flex,
  ListItem,
  List,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import BottomBar from "./BottomBar";

const Sidebar = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");

  const Sidebar = (
    <Stack position="fixed" height="100%" width="10rem">
      <Flex alignItems="center" justifyContent="center">
        <List mt="5rem">
          <ListItem
            borderWidth={3}
            p={1}
            width="6em"
            fontWeight="bold"
            rounded={15}
            _hover={{
              bgColor: "blue.800",
              borderColor: "blue.800",
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
            width="6em"
            fontWeight="bold"
            rounded={15}
            _hover={{
              bgColor: "blue.800",
              borderColor: "blue.800",
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
  );
  return <>{isSmallerThan850 ? <BottomBar /> : Sidebar}</>;
};

export default Sidebar;
