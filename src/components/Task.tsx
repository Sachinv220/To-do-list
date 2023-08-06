import React, { useState, memo} from "react";
import {
  Checkbox,
  Flex,
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  Input,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  Button,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import { TTask } from "../utils/types";

interface Props {
  task: TTask;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
  onRename: (id: number, rename: string) => void;
}

const Task: React.FC<Props> = ({ task, onDelete, onCheck, onRename }) => {
  const [checked, setChecked] = useState(task.checked);
  const [renameTask, setRenameTask] = useState(task.text);
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const bgColor = "teal";

  console.log("Re-Rendered", task.text);

  const handleCheck = () => {
    setChecked(!checked);
    onCheck(task.id);
  };

  return (
    <Flex
      bg={bgColor}
      _hover={{ bg: "teal.400", borderColor: "teal.400" }}
      borderWidth={20}
      maxWidth="25rem"
      width={smallerThan540 ? "20rem" : "25rem"}
      rounded={16}
      borderColor={bgColor}
      mb={2}
      color="black"
    >
      <Checkbox
        maxWidth="18rem"
        width="18rem"
        onChange={handleCheck}
        onDoubleClick={() => onDelete(task.id)}
        wordBreak="break-word"
        defaultChecked={checked}
      >
        <Text
          fontSize={17}
          opacity={checked ? 0.5 : 1}
          textDecor={checked ? "line-through" : "none"}
        >
          {renameTask.trim() ? renameTask : task.text}
        </Text>
      </Checkbox>
      <Popover
        placement="bottom"
        closeOnBlur={false}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <PopoverTrigger>
          <IconButton ml={5} aria-label="" icon={<MdEdit />} size="sm" />
        </PopoverTrigger>
        <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            Rename
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Input
              onChange={(e) => setRenameTask(e.target.value)}
              defaultValue={task.text}
              variant="filled"
              placeholder="Rename Task"
            />
            <Button
              onClick={() => {
                onRename(task.id, renameTask)
                onClose();
              }}
              mt={1}
              colorScheme="green"
            >
              Confirm
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default memo(Task);
