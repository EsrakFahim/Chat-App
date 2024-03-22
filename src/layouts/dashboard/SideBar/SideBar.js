import React, { useState } from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch, styled } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Nav_Buttons } from "../../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import logo from '../../../assets/Images/logo.png'
import useSettings from "../../../hooks/useSettings";

const AntSwitch = styled(Switch)(({ theme }) => ({
      width: 40,
      height: 20,
      padding: 0,
      display: "flex",
      "&:active": {
            "& .MuiSwitch-thumb": {
                  width: 15,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
                  transform: "translateX(9px)",
            },
      },
      "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
                  transform: "translateX(20px)",
                  color: "#fff",
                  "& + .MuiSwitch-track": {
                        opacity: 1,
                        backgroundColor:
                              theme.palette.mode === "dark"
                                    ? "#177ddc"
                                    : "#1890ff",
                  },
            },
      },
      "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 16,
            height: 16,
            borderRadius: 8,
            transition: theme.transitions.create(["width"], {
                  duration: 200,
            }),
      },
      "& .MuiSwitch-track": {
            borderRadius: 20 / 2,
            opacity: 1,
            backgroundColor:
                  theme.palette.mode === "dark"
                        ? "rgba(255,255,255,.35)"
                        : "rgba(0,0,0,.25)",
            boxSizing: "border-box",
      },
}));

const SideBar = () => {

      const [selected, setSelected] = useState(0)
      const theme = useTheme();
      const { onToggleMode } = useSettings()


      return (
            <Box
                  py={2}
                  sx={{
                        height: "100vh",
                        width: "40px",
                        background: `${theme.palette.background.paper}`,
                        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                  }}
            >
                  <Stack
                        sx={{ height: "100%" }}
                        direction="column"
                        justifyContent="space-between"
                  >
                        <Stack spacing={4}>
                              <Stack direction="column" alignItems="center">
                                    <Box
                                          sx={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: 1,
                                                background: `${theme.palette.primary.main}`,
                                          }}
                                    >
                                          <IconButton>
                                                <img src={logo} alt={"logo"} />
                                          </IconButton>
                                    </Box>
                              </Stack>
                              <Stack
                                    spacing={2}
                                    direction="column"
                                    alignItems="center"
                              >
                                    {Nav_Buttons.map((el) => (
                                          <Box
                                                key={el.index}
                                                sx={{
                                                      width: "30px",
                                                      height: "30px",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      borderRadius: 1,
                                                      background:
                                                            el.index ===
                                                            selected
                                                                  ? theme
                                                                          .palette
                                                                          .primary
                                                                          .main
                                                                  : theme
                                                                          .palette
                                                                          .background
                                                                          .paper,
                                                }}
                                          >
                                                <IconButton
                                                      onClick={() =>
                                                            setSelected(
                                                                  el.index
                                                            )
                                                      }
                                                      sx={{
                                                            /*  width: "100%", */ color:
                                                                  theme.palette
                                                                        .mode ===
                                                                  "light"
                                                                        ? el.index ===
                                                                          selected
                                                                              ? "#fff"
                                                                              : "#000"
                                                                        : el.index ===
                                                                          selected
                                                                        ? "#fff"
                                                                        : "#fff",
                                                      }}
                                                >
                                                      {el.icon}
                                                </IconButton>
                                          </Box>
                                    ))}
                                    <Divider sx={{ width: "70%" }} />
                                    <Box
                                          sx={{
                                                width: "30px",
                                                height: "30px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: 1,
                                                background:
                                                      3 === selected
                                                            ? theme.palette
                                                                    .primary
                                                                    .main
                                                            : theme.palette
                                                                    .background
                                                                    .paper,
                                          }}
                                    >
                                          <IconButton
                                                onClick={() => setSelected(3)}
                                                sx={{
                                                      /* width: "max-content", */ color:
                                                            theme.palette
                                                                  .mode ===
                                                            "light"
                                                                  ? 3 ===
                                                                    selected
                                                                        ? "#fff"
                                                                        : "#000"
                                                                  : 3 ===
                                                                    selected
                                                                  ? "#fff"
                                                                  : "#fff",
                                                }}
                                          >
                                                <Gear />
                                          </IconButton>
                                    </Box>
                              </Stack>
                        </Stack>
                        <Stack
                              spacing={2}
                              direction="column"
                              alignItems="center"
                        >
                              <AntSwitch
                                    onChange={() => {
                                          onToggleMode();
                                    }}
                              />
                              <Avatar src={faker.image.avatar()} />
                        </Stack>
                  </Stack>
            </Box>
      );
};

export default SideBar;
