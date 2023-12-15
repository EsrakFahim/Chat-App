import { Box, Stack } from "@mui/material";
import React from "react";
import ChatList from "./ChatList";
import Conversation from "../../components/Conversation/Conversation";

const GeneralApp = () => {

  return (
    <>
      <Stack direction={'row'}>
      <Box
        sx={
          {
            height: '100vh'
          }
        }
      >
        <ChatList />
      </Box>
        <Box
          sx={
            {
              height:'100vh',
              width:'calc(100vw - 360px)',
            }
          }
        >
          <Conversation/>
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
