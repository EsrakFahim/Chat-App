import { Box } from '@mui/material';
import React from 'react';
import Messages from './Messages/Messages';

const MessagePart = () => {
      return (
            <>
                  <Box 
                  width={'100%'}
                  sx={
                        {
                              flexGrow:1,
                              // background:'#ff66'
                              overflowY:'scroll'
                        }
                  }>
                        <Messages/>
                  </Box>
            </>
      );
};

export default MessagePart;