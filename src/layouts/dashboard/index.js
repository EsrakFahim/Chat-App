import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, Stack, Switch, styled } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

import useSettings from "../../hooks/useSettings";
import logo from '../../assets/Images/logo.png'


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));



const DashboardLayout = () => {
  const [selected, setSelected] = useState(0)
  const theme = useTheme();
  const { onToggleMode } = useSettings()
  console.log(theme)

  return (
    <Stack direction="row"
      divider={
        <Box
          component="hr"
          sx={{
            border: (theme) =>
              `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#f3f3f3'}`,
          }}
        />
      }
    >
      <Box
        py={2}
        sx={
          {
            height: '100vh',
            width: '60px',
            background: `${theme.palette.background.paper}`,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
          }
        }>
        <Stack sx={{ height: "100%" }} direction="column" justifyContent="space-between">
          <Stack spacing={4}>
            <Stack direction="column" alignItems="center">
              <Box sx={
                {
                  width: '40px',
                  height: '40px',
                  borderRadius: 1,
                  background: `${theme.palette.primary.main}`,
                }
              }>
                <IconButton>
                  <img src={logo} alt={"logo"} />
                </IconButton>
              </Box>
            </Stack>
            <Stack spacing={2} direction="column" alignItems="center">
              {
                Nav_Buttons.map((el) => (
                  <Box key={el.index} sx={
                    {
                      width: '40px',
                      height: '40px',
                      borderRadius: 1,
                      background: el.index === selected ? theme.palette.primary.main : theme.palette.background.paper,
                    }
                  }>
                    <IconButton
                      onClick={() => setSelected(el.index)}
                      sx={{ width: "max-content", color: theme.palette.mode === "light" ? el.index === selected ? "#fff" : "#000" : el.index === selected ? "#fff" : "#fff", }}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ))
              }
              <Divider sx={{ width: "80%" }} />
              <Box sx={
                {
                  width: '40px',
                  height: '40px',
                  borderRadius: 1,
                  background: 3 === selected ? theme.palette.primary.main : theme.palette.background.paper,
                }
              }>
                <IconButton
                  onClick={() => setSelected(3)}
                  sx={{ width: "max-content", color: theme.palette.mode === "light" ? 3 === selected ? "#fff" : "#000" : 3 === selected ? "#000" : "#fff", }}
                >
                  <Gear />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={2} direction="column" alignItems="center">
            <AntSwitch onChange={() => { onToggleMode() }} />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
