import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from '@mui/icons-material/Send';
// import axios from "axios";
// import { gql, useMutation } from "@apollo/client";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  messageText: Yup.string().required("Required Field"),
});
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    border: "1px solid #fff",
    color: "#fff",
    padding: "30px 30px 40px 30px",
    borderRadius: "4px",
    width: "500px",
    margin: "auto",
  },
  customInput: {
    paddingBottom: "8px",
    "& .MuiInputBase-input": {
      // Custom input text styles
      color: "#000",
    },
    "& .MuiInputBase-root": {
      // Custom root styles
      fontSize: "16px",
      fontWeight: "bold",
    },
    "& .MuiInput-underline:before, & .MuiInput-underline:after": {
      // Custom underline styles
      // borderBottom: '2px solid #f50057',
    },
  },
  customButton: {
    marginTop: theme.spacing(2),
    fontWeight: "600",
    height: "60px",
  },
  customTextArea: {
    width: "100%",
    color: "#000",
    marginBottom: "20px",
     },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      messageText: "",
    },
  });

  const apiHost = "https://api.chatadmin-mod.click/admin/chat/contactus/";
  const Api = Object.freeze({
    defaultHeaders: {
      "Content-Type": "application/json",
      // add any other default headers here
    },
    // add any other API-related methods here
  });

  const onSubmit = async (data) => {
    console.log(data);
    const request = new Request(apiHost, {
      method: "POST",
      headers: new Headers(Api.defaultHeaders),
      body: JSON.stringify(data),
    });

    return fetch(request)
      .then((response) => {
        console.log("response", response);
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <div style={{ margin: 20, textAlign: "center" }}>
      <h2>CONTACT US</h2>
      <Grid container spacing={1} direction="row">
        <Grid item xs={12}>
          <Paper
            className={classes.root}
            variant="outlined"
            square
            elevation={3}
          >
            {isSubmitted ? (
              <Typography
                style={{ color: "#000", fontSize: "25px", fontWeight: "bold" }}
                variant="h3"
                component="h2"
              >
                Thank you for your message! We will get back to you shortly.
              </Typography>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", alignItems: "center",mb:3  }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    className={classes.customInput}
                    label="Name"
                    {...register("name")}
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb:3 }}>
                  <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    label="Email"
                    className={classes.customInput}
                    {...register("email")}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Box>

                <TextField
                  className={classes.customTextArea}
                  label="Tell us more"
                  multiline
                  rows={4}
                  {...register("messageText")}
                  fullWidth
                  variant="outlined"
                  error={!!errors.messageText}
                  helperText={errors.messageText?.message}
                />

                <Button
                  size="large"
                  className={classes.customButton}
                  type="submit"
                  variant="contained"
                  color="secondary"
                  endIcon={<SendIcon />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
