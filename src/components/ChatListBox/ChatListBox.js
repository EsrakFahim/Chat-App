import { Avatar, Badge, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';


const ChatListBox = ({ img, name, msg, time, unread, pinned, online }) => {

      return (
            <Box
                  p={1.5}
                  sx={
                        {
                              width: '90%',
                              margin: 'auto',
                              borderRadius: '8px',
                              boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
                              '&:hover':{
                                    boxShadow: "0px 0px 4px rgba(0,0,0,0.5)",
                              }
                        }
                  }>
                  <Stack direction='row' spacing={1.5}>
                        {
                              online ?
                                    <BadgeAvatar img={img} /> :
                                    <Avatar src={img} />
                        }
                        <Stack
                              direction='row'
                              sx={
                                    {
                                          justifyContent: 'space-between',
                                          width: '100%'
                                    }
                              }>
                              <Stack spacing={0.7}>
                                    <Typography variant='subtitle2'>
                                          {name}
                                    </Typography>
                                    <Typography fontSize='8px' fontWeight='200'>
                                          {msg}
                                    </Typography>
                              </Stack>
                              <Stack alignItems='center' spacing={0.7}>
                                    <Typography fontSize='8px' fontWeight='200'>
                                          {time}
                                    </Typography>
                                    <Typography >
                                          {
                                                unread > 0 && <Badge color="secondary" badgeContent={`${unread}`} />
                                          }
                                    </Typography>
                              </Stack>
                        </Stack>
                  </Stack>
            </Box>
      );
};

export default ChatListBox;