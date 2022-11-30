import { Input, Group } from "@mantine/core";

export default function ChatComponent() {
  return (
    <>
      <Group align={'center'}>
        <Input.Wrapper w={'100%'}>
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
