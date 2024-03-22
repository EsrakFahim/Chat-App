import React from "react";
import { Chat_History } from "../../../data";
import {
      DocMediaMessage,
      MediaLinkMessage,
      MediaMessage,
      ReplyMessage,
      TextMessage,
      TimeLineDivider,
} from "./MessagesType";
import { Box, Stack } from "@mui/material";

const Messages = () => {
      return (
            <Box p={3}>
                  <Stack spacing={3}>
                        {Chat_History?.map((el, index) => {
                              switch (el.type) {
                                    case "divider":
                                          return (
                                                <TimeLineDivider
                                                      key={index}
                                                      el={el}
                                                />
                                          );
                                    case "msg":
                                          switch (el.subtype) {
                                                case "img":
                                                      return (
                                                            <MediaMessage
                                                                  key={index}
                                                                  el={el}
                                                            />
                                                      );
                                                case "doc":
                                                      return (
                                                            <DocMediaMessage
                                                                  el={el}
                                                            />
                                                      );
                                                case "link":
                                                      return (
                                                            <MediaLinkMessage
                                                                  key={index}
                                                                  el={el}
                                                            />
                                                      );
                                                case "reply":
                                                      return (
                                                            <ReplyMessage
                                                                  key={index}
                                                                  el={el}
                                                            />
                                                      );
                                                default:
                                                      return (
                                                            <TextMessage
                                                                  key={index}
                                                                  el={el}
                                                            />
                                                      ); // Handle unknown types or ignore them
                                          }
                                          // break;
                                    default:
                                          break; // Handle unknown types or ignore them
                              }
                        })}
                  </Stack>
            </Box>
      );
};

export default Messages;
