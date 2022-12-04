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
import {useAuthUser} from 'react-auth-kit'
import { useParams } from "react-router-dom";

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
  const user = useAuthUser();


  const mainLinks = user()!.guilds.map((guild: any) => ( //Need to type this
    <Tooltip
      label={guild.name}
      position="right"
      withArrow
      transitionDuration={0}
      key={guild.name}
    >
      <UnstyledButton
        className={cx(classes.mainLink)}
      >
        <Image src={guild.icon} radius={"xl"} withPlaceholder />
      </UnstyledButton>
    </Tooltip>
  ));

  const channels = channelsMock.map((channel) => (
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

            {channels}
          </div>
        </Navbar.Section>
      </Navbar>
    </>
  );
}
