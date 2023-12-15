import { useTheme } from '@emotion/react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { Archive, CircleDashed } from 'phosphor-react';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import ChatListBox from '../../components/ChatListBox/ChatListBox';
import { ChatListData } from '../../data';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const ChatList = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={
                {
                    width: "300px",
                    height: '100%',
                    background: theme.palette.background.paper,
                    boxShadow: "0px 0px 4px rgba(0,0,0,0.5)",
                }
            }>
                <Stack sx={{
                    maxHeight: "100vh"
                }}>
                    <Stack>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' p={2}>
                        <Typography variant='h5'>
                            Chats
                        </Typography>
                        <CircleDashed size={24} />
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Stack sx={{ width: '90%', }}>
                            <SearchBar />
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={1.5} px={1.2} sx={{
                            width: '90%',
                        }}>
                            <Archive justifyContent='flex-start' size={24} />
                            <Button variant='text'>
                                <Typography variant='subtitle2'>
                                    Archive
                                </Typography>
                            </Button>
                        </Stack>
                        <Divider sx={{ width: "90%" }} />
                    </Stack>
                    </Stack>
                    <Stack >
                        <SimpleBar direction='column'   style={{ height: 'calc(100vh - 152px)' }}>
                            <Stack>
                                <Typography p={2} variant='subtitle2'>
                                    Pinned
                                </Typography>
                                <Stack direction='column' alignItems='center' spacing={1.5}>
                                    {ChatListData.filter(el => el.pinned).map((elm, idx) => (
                                        <ChatListBox key={idx} {...elm} />
                                    ))}
                                    <Divider sx={{ width: "90%" }} />
                                </Stack>
                            </Stack>
                            <Stack>
                                <Typography p={2} variant='subtitle2'>
                                    All Chats
                                </Typography>
                                <Stack direction='column' alignItems='center' spacing={1.5}>
                                    {ChatListData.filter(el => !el.pinned).map((elm, idx) => (
                                        <ChatListBox key={idx} {...elm} />
                                    ))}
                                </Stack>
                            </Stack>
                        </SimpleBar>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default ChatList;