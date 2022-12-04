/**
 * Took from MantineUI
 */

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import { API_URL } from "../../Constants";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)", //TODO: Change it to some snippet of chat view when its ready.
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default () => {
  const { classes } = useStyles();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const LoginHandler = (values: { email: string; password: string }) => {
    console.log(values);
    axios
      .post(`${API_URL}/auth/login`, {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        let { data } = res;
        if (
          signIn({
            token: data.token,
            authState: data,
            expiresIn: 60 * 24 * 7, //One week,
            tokenType: "",
          })
        )
          return navigate("/guild")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome back to Mystic!
        </Title>

        <form onSubmit={form.onSubmit((values) => LoginHandler(values))}>
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps("password")}
          />
          <Button type="submit" fullWidth mt="xl" size="md">
            Login
          </Button>
        </form>

        <Text align="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};
