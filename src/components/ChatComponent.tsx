import { Input, Group, Stack } from "@mantine/core";
import Message from "./Chat/MessageComponent";
import ChannelTopBar from "./GuildComponents/ChannelName";

export default function ChatComponent() {
  return (
    <>
      <Stack sx={{height:'100%', width: '100%'}}>
    <ChannelTopBar/>
        <Stack>
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
        <Group align={"center"}>
          <Input.Wrapper w={"100%"}>
            <Input
              type={"text"}
              placeholder={"Type your message here..."}
              radius={"xl"}
              size={"md"}
            ></Input>
          </Input.Wrapper>
        </Group>
      </Stack>
    </>
  );
}
