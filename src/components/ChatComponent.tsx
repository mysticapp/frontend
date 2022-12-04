import { Input, Group, Stack, ScrollArea } from "@mantine/core";
import Message from "./Chat/MessageComponent";
import ChannelTopBar from "./GuildComponents/ChannelName";

export default function ChatComponent() {
  return (
    <>
      <Stack sx={{ height: "100%", width: "100%" }}>
        <ChannelTopBar />
        <ScrollArea sx={{ height: "87vh" }}>
          <Stack sx={{ height: "100%" }}>
            <Message
              author={{
                _id: "123",
                username: "mafineeek",
                avatar:
                  "https://cdn.discordapp.com/avatars/854342480019587133/a_d195a0d4f1f1ebd6371abef25ceb845d.gif?size=4096",
              }}
              message={{ content: "test", createdAt: new Date() }}
            />
            <Message
              author={{
                _id: "123",
                username: "mafineeek",
                avatar:
                  "https://cdn.discordapp.com/avatars/854342480019587133/a_d195a0d4f1f1ebd6371abef25ceb845d.gif?size=4096",
              }}
              message={{ content: "test", createdAt: new Date() }}
            />
            <Message
              author={{
                _id: "123",
                username: "mafineeek",
                avatar:
                  "https://cdn.discordapp.com/avatars/854342480019587133/a_d195a0d4f1f1ebd6371abef25ceb845d.gif?size=4096",
              }}
              message={{ content: "test", createdAt: new Date() }}
            />
          </Stack>
        </ScrollArea>
      </Stack>
      <Group
        sx={{ position: "absolute", bottom: 15, width: "80%" }}
        align={"center"}
      >
        <Input.Wrapper sx={{ width: "100%" }}>
          <Input
            type={"text"}
            placeholder={"Type your message here..."}
            radius={"xl"}
            size={"md"}
          ></Input>
        </Input.Wrapper>
      </Group>
    </>
  );
}
