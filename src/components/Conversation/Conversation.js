import React from 'react';
import TopBar from '../MessagePart/TopBar';
import ChatBar from '../MessagePart/ChatBar';
import MessagePart from '../MessagePart/MessagePart';
import { Stack } from '@mui/material';

const Conversation = () => {
      return (
            <Stack direction={'column'} sx={
                  {
                        height:'100%',
                        maxHeight:'100vh',
                        width:'auto'
                  }
            } >
                  <TopBar />
                  <MessagePart/>
                  <ChatBar/>
            </Stack>
      );
};

export default Conversation;