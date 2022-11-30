import { useState } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
  Stack,
  Text,
  Grid,
  Group,
  Image,
} from "@mantine/core";
import { IconHash, IconVolume } from "@tabler/icons";

import ChatComponent from "../../components/ChatComponent";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    width: "100%",
  },

  aside: {
    flex: "0 0 60px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: "44px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.white,
    },
  },
}));

const mainLinksMockdata = [
  {
    icon: "https://cdn.discordapp.com/icons/1012907317798371481/a_775c7135ab079140e02c5411c80ad460.gif?size=4096",
    name: "Server #1",
  },
  {
    icon: "https://cdn.discordapp.com/avatars/556218750337286145/e7e997f4594c44fd502498a41159d575.png",
    name: "Server #2",
  },
  {
    icon: "https://cdn.discordapp.com/avatars/332131662525628416/ed55348759b2bbc0ea3d75dc95831101.png",
    name: "Server #3",
  },
  {
    icon: "https://cdn.discordapp.com/avatars/297421531771043840/39a2fd7bbc750b5df0e214772e7c6e9d.png",
    name: "Server #4",
  },
  {
    icon: "https://cdn.discordapp.com/avatars/951926795287023616/d2efd296c246d1b1501a9b2c9a805223.png",
    name: "Server #5",
  },
  {
    icon: "https://cdn.discordapp.com/icons/1012907317798371481/a_775c7135ab079140e02c5411c80ad460.gif?size=4096",
    name: "Server #6",
  },
  {
    icon: "https://cdn.discordapp.com/icons/1012907317798371481/a_775c7135ab079140e02c5411c80ad460.gif?size=4096",
    name: "Server #7",
  },
];

const channelsMock = [
  {
    name: "general",
    type: "GUILD_TEXT",
  },
  {
    name: "general",
    type: "GUILD_TEXT",
  },
  {
    name: "general",
    type: "GUILD_TEXT",
  },
  {
    name: "general",
    type: "GUILD_TEXT",
  },
  {
    name: "general",
    type: "GUILD_TEXT",
  },
  {
    name: "general",
    type: "GUILD_TEXT",
  },
  {
    name: "chillout zone",
    type: "GUILD_VOICE",
  },
];

const channelTypeIcon = {
  GUILD_TEXT: <IconHash />,
  GUILD_VOICE: <IconVolume />,
};

export default function GuildSidebar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("");
  const [activeLink, setActiveLink] = useState("Settings");

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.name}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.name}
    >
      <UnstyledButton
        onClick={() => setActive(link.name)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.name === active,
        })}
      >
        <Image src={link.icon} radius={"xl"} withPlaceholder />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = channelsMock.map((channel) => (
    <a className={cx(classes.link)}>
      <Group>
        {channelTypeIcon[channel.type as keyof typeof channelTypeIcon]}
        {channel.name}
      </Group>
    </a>
  ));

  return (
    <>
      <Navbar width={{ sm: 290 }}>
        <Navbar.Section grow className={classes.wrapper}>
          <div
            className={classes.aside}
            style={{
              gap: "10px",
            }}
          >
            <div className={classes.logo}>
              <Image
                src="https://cdn.discordapp.com/avatars/854342480019587133/a_d195a0d4f1f1ebd6371abef25ceb845d.gif?size=4096"
                radius="xl"
                withPlaceholder
                width={"sm"}
              />
            </div>
            {mainLinks}
          </div>
          <div className={classes.main}>
            <Title order={4} className={classes.title}>
              Mystic Support Guild
            </Title>

            {links}
          </div>
        </Navbar.Section>
      </Navbar>
    </>
  );
}
