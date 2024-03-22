import {
      Box,
      Divider,
      IconButton,
      Link,
      Stack,
      Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Download, Image } from "phosphor-react";
import React from "react";

const MediaLinkMessage = ({ el }) => {
      const theme = useTheme();
      return (
            <Stack
                  direction="row"
                  justifyContent={el.incoming ? "start" : "end"}
            >
                  <Box
                        p={1.5}
                        sx={{
                              backgroundColor: el.incoming
                                    ? theme.palette.background.neutral
                                    : theme.palette.primary.main,
                              borderRadius: 1.5,
                              width: "max-content",
                        }}
                  >
                        <Stack
                              p={2}
                              direction="column"
                              spacing={3}
                              alignItems="center"
                              sx={{
                                    backgroundColor:
                                          theme.palette.background.paper,
                                    borderRadius: 1,
                              }}
                        >
                              <img
                                    src={el.preview}
                                    alt={el.message}
                                    style={{
                                          maxHeight: 210,
                                          borderRadius: "10px",
                                    }}
                              />
                              <Stack
                                    direction="column"
                                    spacing={0.5}
                                    justifyContent="center"
                                    alignItems="center"
                              >
                                    <Typography
                                          variant="body1"
                                          color={
                                                el.incoming
                                                      ? theme.palette.text
                                                      : "#fff"
                                          }
                                    >
                                          {el.message}
                                    </Typography>
                                    <Typography
                                          variant="body2"
                                          component={Link}
                                          color={theme.palette.primary.main}
                                    >
                                          www.youtube.com
                                    </Typography>
                              </Stack>
                        </Stack>
                  </Box>
            </Stack>
      );
};

const DocMediaMessage = ({ el }) => {
      const theme = useTheme();
      return (
            <Stack
                  direction="row"
                  justifyContent={el.incoming ? "start" : "end"}
            >
                  <Box
                        p={1}
                        sx={{
                              backgroundColor: el.incoming
                                    ? theme.palette.background.neutral
                                    : theme.palette.primary.main,
                              borderRadius: 1.5,
                              width: "max-content",
                        }}
                  >
                        <Stack 
                        spacing={1}
                        >
                              <Stack
                                    p={1}
                                    direction="row"
                                    spacing={3}
                                    alignItems="center"
                                    justifyContent="space-between"
                                    sx={{
                                          backgroundColor:
                                                theme.palette.background.paper,
                                          borderRadius: 1,
                                    }}
                              >
                                    <Image size={20} />
                                    <Typography
                                          variant="body2"
                                          color={
                                                el.incoming
                                                      ? theme.palette.text
                                                      : "#fff"
                                          }
                                    >
                                          Click to download
                                    </Typography>
                                    <IconButton>
                                          <Download size={20} />
                                    </IconButton>
                              </Stack>
                              <Typography
                                    variant="body2"
                                    color={
                                          el.incoming
                                                ? theme.palette.text
                                                : "#fff"
                                    }
                              >
                                    {el.message}
                              </Typography>
                        </Stack>
                  </Box>
            </Stack>
      );
};

const MediaMessage = ({ el }) => {
      const theme = useTheme();
      return (
            <Stack
                  direction="row"
                  justifyContent={el.incoming ? "start" : "end"}
            >
                  <Box
                        p={1.5}
                        sx={{
                              backgroundColor: el.incoming
                                    ? theme.palette.background.neutral
                                    : theme.palette.primary.main,
                              borderRadius: 1.5,
                              width: "max-content",
                        }}
                  >
                        <Stack>
                              <img
                                    src={el.img}
                                    alt={el.message}
                                    style={{
                                          maxHeight: 210,
                                          borderRadius: "10px",
                                    }}
                              />
                              <Typography
                                    variant="body2"
                                    color={
                                          el.incoming
                                                ? theme.palette.text
                                                : "#fff"
                                    }
                              >
                                    {el.message}
                              </Typography>
                        </Stack>
                  </Box>
            </Stack>
      );
};

const ReplyMessage = ({ el }) => {
      const theme = useTheme();
      return (
            <Stack
                  direction="row"
                  justifyContent={el.incoming ? "start" : "end"}
            >
                  <Box
                        p={1.5}
                        sx={{
                              backgroundColor: el.incoming
                                    ? theme.palette.background.neutral
                                    : theme.palette.primary.main,
                              borderRadius: 1.5,
                              width: "max-content",
                        }}
                  >
                        <Stack spacing={2}>
                              <Stack
                                    p={2}
                                    direction="column"
                                    spacing={3}
                                    alignItems="center"
                                    sx={{
                                          backgroundColor:
                                                theme.palette.background.paper,
                                          borderRadius: 1,
                                    }}
                              >
                                    <Typography
                                          variant="body2"
                                          color={theme.palette.text}
                                    >
                                          {el.message}
                                    </Typography>
                              </Stack>
                              <Typography
                                    variant="body2"
                                    color={
                                          el.incoming
                                                ? theme.palette.text
                                                : "#fff"
                                    }
                              >
                                    {el.reply}
                              </Typography>
                        </Stack>
                  </Box>
            </Stack>
      );
};

const TextMessage = ({ el }) => {
      const theme = useTheme();
      return (
            <Stack
                  direction="row"
                  justifyContent={el.incoming ? "start" : "end"}
            >
                  <Box
                        p={1.5}
                        sx={{
                              backgroundColor: el.incoming
                                    ? theme.palette.background.neutral
                                    : theme.palette.primary.main,
                              borderRadius: 1.5,
                              width: "max-content",
                        }}
                  >
                        <Typography
                              variant="body2"
                              color={el.incoming ? theme.palette.text : "#fff"}
                        >
                              {el.message}
                        </Typography>
                  </Box>
            </Stack>
      );
};

const TimeLineDivider = ({ el }) => {
      const theme = useTheme();
      // console.log(el);
      return (
            <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
            >
                  <Divider width="46%" />
                  <Typography
                        variant="caption"
                        sx={{
                              color: theme.palette.text,
                        }}
                  >
                        {el.text}
                  </Typography>
                  <Divider width="46%" />
            </Stack>
      );
};

export {
      TimeLineDivider,
      TextMessage,
      MediaMessage,
      ReplyMessage,
      MediaLinkMessage,
      DocMediaMessage,
};
