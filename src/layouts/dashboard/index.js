import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import SideBar from "./SideBar/SideBar";

const DashboardLayout = () => {
      return (
            <Stack
                  direction="row"
                  divider={
                        <Box
                              component="hr"
                              sx={{
                                    border: (theme) =>
                                          `1px solid ${
                                                theme.palette.mode === "dark"
                                                      ? "#333"
                                                      : "#f3f3f3"
                                          }`,
                              }}
                        />
                  }
            >
                  {/* Side Bar */}
                  <SideBar />
                  <Outlet />
            </Stack>
      );
};

export default DashboardLayout;
