import {
  Checkbox,
  Container,
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
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import React from "react";

const Task = ({ task, onDelete, onCheck, onRename }) => {
  const [check, setChecked] = useState(task.checked);
  const [close, setClose] = useState(false);
  const [renameTask, setRenameTask] = useState(task.text);
  const formBackGround = useColorModeValue("blue.300", "teal");
  const PopoverColor = useColorModeValue("gray.50", "blue.800");
  const textColor = useColorModeValue("black", "white");
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");

  const Checked = () => {
    setChecked(!check);
    onCheck(task.id);
  };

  return (
    <Container
      backgroundColor={formBackGround}
      borderWidth={20}
      maxWidth="25rem"
      width={smallerThan540 ? "20rem" : "25rem"}
      rounded={16}
      borderColor={formBackGround}
      mb={2}
      color="black"
    >
      {check ? (
        <Checkbox
          maxWidth="18rem"
          onChange={Checked}
          onDoubleClick={() => onDelete(task.id)}
          defaultChecked
        >
          <s style={{ opacity: 0.5 }}>
            {renameTask.trim() ? renameTask : task.text}
          </s>
        </Checkbox>
      ) : (
        <Checkbox
          maxWidth="18rem"
          onChange={Checked}
          textAlign="justify"
          onDoubleClick={() => onDelete(task.id)}
          color="black"
        >
          {renameTask.trim() ? renameTask : task.text}
        </Checkbox>
      )}

      <Popover placement="bottom" closeOnBlur={false} isOpen={close}>
        <PopoverTrigger>
          <IconButton
            size="sm"
            float="right"
            bgColor="rgb(0, 0, 0, 0.1)"
            icon={<MdEdit />}
            onClick={() => setClose(true)}
          />
        </PopoverTrigger>
        <PopoverContent
          color={textColor}
          bg={PopoverColor}
          borderColor={PopoverColor}
        >
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
              textAlign="center"
              mt={1}
              colorScheme="green"
            >
              Confirm
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <br />
    </Container>
  );
};

export default Task;