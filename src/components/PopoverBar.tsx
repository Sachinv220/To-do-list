import React from "react";
import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

interface Props {
  button : JSX.Element,
  header : any, 
  body : any,  
}

const PopoverBar: React.FC<Props> = ({ button, header, body }) => {
  return (
    <Popover>
      <PopoverTrigger>{button}</PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverCloseButton />
        <PopoverHeader>{header}</PopoverHeader>
        <PopoverBody>{body}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverBar;
