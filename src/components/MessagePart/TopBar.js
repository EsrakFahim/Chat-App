import { faker } from '@faker-js/faker';
import { Box, Divider, Stack,IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';

const TopBar = () => {
      const theme = useTheme();
      console.log(theme);
      return (
            <>
                  <Box 
                  // px={1.5}
                  // py={1}
                  sx={
                        {
                              width: '100%',
                              background: theme.palette.background.paper,
                              boxShadow: "0px 0px 4px rgba(0,0,0,0.5)",
                              padding:'8px 12px'
                        }
                  }>
                        <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}  sx={{ width: '100%', height: '100%' }}>
                              <Stack direction={'row'} spacing={1.2}>
                                    <Box>
                                          <BadgeAvatar img={`${faker.image.avatar()}`} />
                                    </Box>
                                    <Stack direction={'column'}>
                                          <Typography variant='subtitle2'>
                                                {faker.name.fullName()}
                                          </Typography>
                                          <Typography variant='caption'>
                                                Online
                                          </Typography>
                                    </Stack>
                              </Stack>
                              <Stack direction={'row'} spacing={2} alignItems={'center'} sx={{ height: '100%' }}>
                                    <IconButton>
                                          <VideoCamera size={22} />
                                    </IconButton>
                                    <IconButton>
                                          <Phone size={22} />
                                    </IconButton>
                                    <IconButton>
                                          <MagnifyingGlass size={22} />
                                    </IconButton>
                                    <Divider orientation="vertical" flexItem sx={{ height: '80%', alignItems: 'center', margin: 'auto' }} />
                                    <IconButton>
                                          <CaretDown size={22} />
                                    </IconButton>
                              </Stack>
                        </Stack>
                  </Box>
            </>
      );
};

export default TopBar;