import { Container, Text, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import PopoverBar from "../components/PopoverBar";

const Customise = ({ deleteEverything }) => {
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Container ml={isSmallerThan700 ? "1rem" : "14rem"} pt="3rem">
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        Do you want to delete all tasks you won't be able to undo this task
      </Text>
      <PopoverBar
        button={<Button colorScheme="red" variant="outline">Delete</Button>}
        header="you won't be able to undo this action"
        body="Confirm"
        action={deleteEverything}
      />
    </Container>
  );
};

export default Customise;
