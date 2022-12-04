import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";
import React from "react";

function AlertBar({ alert }) {
  const isVisible = Boolean(alert);

  return isVisible ? (
    <Alert status="warning" height="inherit">
      <AlertIcon />
      <Box>
        <AlertTitle>Action Failed</AlertTitle>
        <AlertDescription>{alert}</AlertDescription>
      </Box>
    </Alert>
  ) : (
    ""
  );
}
export default AlertBar;
