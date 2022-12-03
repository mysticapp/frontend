import GuildSidebar from "../../components/GuildComponents/GuildSidebar";
import { AppShell, Text } from "@mantine/core";
import ChatComponent from "../../components/ChatComponent";

export default function GuildView(){
  return (
    <>
      <AppShell padding={'sm'} navbar={<GuildSidebar/>}>
        <ChatComponent/>
      </AppShell>
    </>
  )
}