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
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
// import axios from "axios";
// import { gql, useMutation } from "@apollo/client";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: Yup.string().required("Required Field"),
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
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      padding: "15px",
    },
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: 'green',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   backgroundColor: 'orange',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   backgroundColor: 'cyan',
    // },
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
  const [message, setMessage] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const apiHost = "https://api.chatadmin-mod.click/api/contact-us/";
  const Api = Object.freeze({
    defaultHeaders: {
      "Content-Type": "application/json",
      // add any other default headers here
    },
    // add any other API-related methods here
  });

  const showMessage = (message) => {
    // Update the code here to display the message as desired
    setMessage(message);
    console.log(message); // Example: Log the message to the console
  };

  const onSubmit = async (data) => {
    console.log(data);
    const request = new Request(apiHost, {
      method: "POST",
      headers: new Headers(Api.defaultHeaders),
      body: JSON.stringify(data),
    });

    try {
      const response = await fetch(request);
      const responseData = await response.json();
      console.log("Response data:", responseData);
      if (responseData.success === true) {
        // Handle success case
        console.log("Request was successful");
        setIsSubmitted(true);
      } else {
        // Handle error case or other conditions
        console.log("Request was not successful");
        showMessage(true);
      }
      // Perform further actions with the response data
      return response; // Optionally return the response object
    } catch (error) {
      showMessage(true);
      console.error("Error:", error);
      return error;
    }
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
            {message && (
              <Typography
                style={{ color: "red", fontSize: "16px", marginTop: "8px" }}
                variant="body1"
                component="p"
              >
                FAILED MEESSAGE REQUEST
              </Typography>
            )}
            {isSubmitted ? (
              <>
                <Typography
                  style={{
                    color: "#000",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  variant="h3"
                  component="h2"
                >
                  Thank you for your message! We will get back to you shortly.
                </Typography>
                <Button
                  size="large"
                  className={classes.customButton}
                  type="submit"
                  variant="contained"
                  color="secondary"
                  startIcon={<ArrowBackIcon />}
                >
                  <Link href="/"> Back to Home Page</Link>
                </Button>
              </>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
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

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
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
                  {...register("message")}
                  fullWidth
                  variant="outlined"
                  error={!!errors.message}
                  helperText={errors.message?.message}
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
