import {
  Checkbox,
  Flex,
  Text,
  IconButton,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import PopoverBar from "./PopoverBar";
import React from "react";

const Task = ({ task, onDelete, onCheck, onRename, index }) => {
  const [check, setChecked] = useState(task.checked);
  const [renameTask, setRenameTask] = useState(task.text);
  const [smallerThan540] = useMediaQuery("(max-width: 540px)");
  let checkBoxProps = {};
  if (check) checkBoxProps.defaultChecked = "defaultChecked";

  const bgColor = "teal";

  const Checked = () => {
    setChecked(!check);
    onCheck(task.id);
  };

  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {provided => (
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
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Checkbox
            maxWidth="18rem"
            width="18rem"
            onChange={Checked}
            onDoubleClick={() => onDelete(task.id)}
            wordBreak="break-word"
            {...checkBoxProps}
          >
            <Text
              fontSize={17}
              opacity={check ? 0.5 : 1}
              textDecor={check ? "line-through" : "none"}
            >
              {renameTask.trim() ? renameTask : task.text}
            </Text>
          </Checkbox>
          <PopoverBar
            header="Rename"
            button={
              <IconButton
                justifyContent="flex-end"
                size="sm"
                float="right"
                bgColor="rgb(0, 0, 0, 0.1)"
                icon={<MdEdit style={{ marginRight: "6.4px" }} />}
                ml={10}
              />
            }
            body={
              <Input
                onChange={e => setRenameTask(e.target.value)}
                defaultValue={task.text}
                variant="filled"
                placeholder="Rename task"
                onKeyDown={e => {
                  if (e.key === "Enter") onRename(task.id, renameTask.trim());
                }}
              />
            }
          />
        </Flex>
      )}
    </Draggable>
  );
};

export default Task;