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
} from "@chakra-ui/react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import React from "react";
import { TTask } from "../utils/types";

interface Props {
  task : TTask, 
  onDelete : (id : number) => void, 
  onCheck: (id : number) => void, 
  onRename : (id : number, rename : string) => void, 
}

const Task : React.FC<Props> = ({ task, onDelete, onCheck, onRename }) => {
  let check = task.checked;
  let [close, setClose] = useState(false);
  const [renameTask, setRenameTask] = useState(task.text);
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");
  const bgColor = "teal";

  const Checked = () => {
    check = !check;
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
      {check ? (
        <Checkbox
          maxWidth="18rem"
          width="18rem"
          onChange={Checked}
          onDoubleClick={() => onDelete(task.id)}
          wordBreak="break-word"
          defaultChecked
        >
          <Text fontSize={17} opacity={0.5} textDecor="line-through">
            {renameTask.trim() ? renameTask : task.text}
          </Text>
        </Checkbox>
      ) : (
        <Checkbox
          maxWidth="18rem"
          width="18rem"
          onChange={Checked}
          onDoubleClick={() => onDelete(task.id)}
          wordBreak="break-word"
        >
          <Text fontSize={17}>
            {renameTask.trim() ? renameTask : task.text}
          </Text>
        </Checkbox>
      )}
      <Popover placement="bottom" closeOnBlur={false} isOpen={close}>
        <PopoverTrigger>
          <IconButton
            aria-label=""
            justifyContent="flex-end"
            size="sm"
            float="right"
            bgColor="rgb(0, 0, 0, 0.1)"
            icon={<MdEdit style={{ marginRight: "6.4px" }} />}
            ml={10}
            onClick={() => setClose(true)}
          />
        </PopoverTrigger>
        <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            Rename
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton onClick={() => setClose(false)} />
          <PopoverBody>
            <Input
              onChange={e => setRenameTask(e.target.value)}
              defaultValue={task.text}
              variant="filled"
              placeholder="rename Task"
              onKeyDown={e => {
                if (e.key === "Enter") {
                  setClose(false);
                  onRename(task.id, renameTask.trim());
                }
              }}
            />
            <Button
              onClick={() => {
                onRename(task.id, renameTask);
                setClose(false);
              }}
              mt={1}
              colorScheme="green"
            >
              Confirm
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <br />
    </Flex>
  );
};

export default Task;
