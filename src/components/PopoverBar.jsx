import React from "react";
import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

const PopoverBar = ({ button, header, body }) => {
  return (
    <Popover>
      <PopoverTrigger>{button}</PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>
          {header}
        </PopoverHeader>
        <PopoverBody>{body}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverBar;
