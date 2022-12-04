import { Text, Image, Flex } from "@mantine/core";

export default function Message({ author, message }: Props) {
  return (
    <>
      <Flex gap={"7px"}>
        <Image src={author.avatar} width={"32px"} radius={"xl"} />
        <Text>
          {author.username}{" "}
          <Text span size={"xs"}>
            {message.createdAt.toLocaleString('en-GB')}
          </Text>
        </Text>
      </Flex>
      <Text size={"sm"}>{message.content}</Text>
    </>
  );
}

interface AuthorProp {
  username: string;
  avatar: string;
  _id: string;
}

interface MessageProp {
  content: string;
  createdAt: Date;
}

interface Props {
  author: AuthorProp;
  message: MessageProp;
}
