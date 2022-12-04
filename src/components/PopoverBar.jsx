import React from "react";
import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  PopoverHeader,
  PopoverBody,
  Button,
} from "@chakra-ui/react";

const PopoverBar = ({ action, button, header, body }) => {
  return (
    <Popover>
      <PopoverTrigger>{button}</PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>
          <Text fontSize="xl" fontWeight="extrabold">
            {header}
          </Text>
        </PopoverHeader>
        <PopoverBody>
          <Button onClick={action}>{body}</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverBar;
