import styled from '@emotion/styled';
import { Box, IconButton, InputAdornment, Stack, TextField, useTheme } from '@mui/material';
import { Link, Smiley, PaperPlaneTilt } from 'phosphor-react';
import React from 'react';

const ChatBar = () => {
      const theme = useTheme()

      const ChatStyleBar = styled(TextField)(({ theme }) => ({
            "& .MuiInputBase-input": {
                  height: '20px', // Set the desired height here
                  '&:hover': {
                        // Add any hover styles if needed
                  },
            },
      }));

      return (
            <>
                  <Box sx={
                        {
                              width: '100%',
                              background: theme.palette.background.paper,
                              boxShadow: "0px 0px 4px rgba(0,0,0,0.5)",
                              padding: '8px 12px',
                        }
                  } >
                        <Stack direction={'row'} alignItems={'center'} sx={{ borderRadius: '8px' }} spacing={2} >
                              <ChatStyleBar
                                    id="outlined-size-small"
                                    size="small"
                                    fullWidth
                                    placeholder='Type your message...'
                                    InputProps={
                                          {
                                                disableUnderline: true,
                                                startAdornment: (
                                                      <InputAdornment>
                                                            <IconButton>
                                                                  <Link />
                                                            </IconButton>
                                                      </InputAdornment>
                                                ),
                                                endAdornment: (
                                                      <InputAdornment>
                                                            <IconButton>
                                                                  <Smiley />
                                                            </IconButton>
                                                      </InputAdornment>
                                                )
                                          }
                                    }
                                    autoComplete="off"
                              />
                              <Box sx={
                                    {
                                          width: '40px',
                                          height: '40px',
                                          borderRadius: 1,
                                          background: `${theme.palette.primary.main}`,
                                    }
                              }>
                                    <IconButton sx={{ color: '#f2f2f2' }}>
                                          <PaperPlaneTilt />
                                    </IconButton>
                              </Box>
                        </Stack>
                  </Box>
            </>
      );
};

export default ChatBar;