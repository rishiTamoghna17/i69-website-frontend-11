import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "./RegistrationStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import withFirebaseAuth from 'react-with-firebase-auth'
import { withTranslation } from "react-i18next";
import { withRouter } from 'next/router';
import firebase from "firebase/app";
import firebaseConfig from '../common/firebaseConfig';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { loginWithFetch } from "../queris";
class Login extends Component {
  state = {
    email: "",
    password: "",
    passwordConfrim: "",
    hidePassword: true,
    error: null,
    errorOpen: false,
  };

  errorClose = e => {
    this.setState({
      errorOpen: false
    });
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  passwordMatch = () => this.state.password === this.state.passwordConfrim;

  showPassword = () => {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
  };

  isValid = () => {
    if (this.state.email === "") {
      return false;
    }
    return true;
  };
  login = e => {
    e.preventDefault();
    const newUserCredentials = {
      email: this.state.email,
      password: this.state.password,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    console.log("this.props.newUserCredentials", newUserCredentials);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => {
        // Signed in 
        // ...
        console.log("sadfasdfasdf===>", data.user.uid)
        localStorage.setItem("uid", data.user.uid)

        alert('Login success!')
        this.props.history.push('/')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

    //dispath to userActions
  };

  loginWithGoogle = e => {
    e.preventDefault();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        loginWithFetch({
          accessToken: credential.idToken,
          accessVerifier: "",
          provider: credential.providerId
        })
        // The signed-in user info.
        var user = result.user;
        console.log("sadfasdfasdf===>", user)
        localStorage.setItem("uid", user.uid)
        firebase?.database()?.ref('users')?.child(user.uid).set({
          name: user.displayName,
        })
        alert('Login success!')
        this.props.router?.push('/dashboard')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('errorMessage', errorMessage)
        alert(errorMessage)
        // ...
      });

    //dispath to userActions
  };

  loginWithFacebook = e => {
    e.preventDefault();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Signed in       
        var user = result.user;
        console.log("sadfasdfasdf===>", user)
        localStorage.setItem("uid", user.uid)
        firebase.database().ref('users/' + user.uid).set({
          name: result.additionalUserInfo.profile.name,
        })
        alert('Login success!')
        this.props.history.push('/')
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage)
        // ...
      });

    //dispath to userActions
  };

  loginWithTwitter = e => {
    e.preventDefault();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    var provider = new firebase.auth.TwitterAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = credential.accessToken;
        var secret = credential.secret;
        console.log('result', result)
        loginWithFetch({
          accessToken: credential.accessToken,
          accessVerifier: credential.secret,
          provider: 'twitter-oauth'
        })
        // The signed-in user info.
        var user = result.user;
        console.log("sadfasdfasdf===>", user)
        localStorage.setItem("uid", user.uid)
        firebase.database().ref('users/' + user.uid).set({
          name: result.additionalUserInfo.profile.name,
        })
        alert('Login success!')
        this.props.router?.push('/dashboard')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage)
        // ...
      });

    //dispath to userActions
  };

  render() {
    const { classes } = this.props;
    const { t } = this.props
    return (
      <div className={classes.main}>
        {/* <CssBaseline /> */}

        <Paper className={classes.paper}>

          <form
            className={classes.form}
            onSubmit={() => this.login}
          >
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="email" className={classes.labels}>
                {t('Login.email')}
              </InputLabel>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("email")}
              />
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="password" className={classes.labels}>
                {t('Login.password')}
              </InputLabel>
              <Input
                name="password"
                autoComplete="password"
                className={classes.inputs}
                disableUnderline={true}
                onClick={this.state.showPassword}
                onChange={this.handleChange("password")}
                type={this.state.hidePassword ? "password" : "input"}

                endAdornment={
                  this.state.hidePassword ? (
                    <InputAdornment position="end">
                      <VisibilityOffTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      <VisibilityTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      />
                    </InputAdornment>
                  )
                }
              />
            </FormControl>
            <Button
              disabled={!this.isValid()}
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={this.login}
            >
              {t('Login.login')}
            </Button>
          </form>

          <Button
            disableRipple
            fullWidth
            variant="outlined"
            className={classes.socialbutton}
            type="submit"
            onClick={this.loginWithGoogle}
          >
            {t('Login.loginGoogle')}
          </Button>
          <Button
            disableRipple
            fullWidth
            variant="outlined"
            className={classes.socialbutton}
            type="submit"
            onClick={this.loginWithFacebook}
          >
            {t('Login.loginFacebook')}

          </Button>
          <Button
            disableRipple
            fullWidth
            variant="outlined"
            className={classes.socialbutton}
            type="submit"
            onClick={this.loginWithTwitter}
          >
            {t('Login.loginTwitter')}
          </Button>

          <p className="text-center my-3">
            {t('Login.account')}{" "}
            <Link href="/signup" className="text-blue-500 hover:text-blue-600">
              {t('Login.signupHere')}
            </Link>{" "}
            <br />{" "}
            <Link href="/reset" className="text-blue-500 hover:text-blue-600">
              {t('Login.forgotPassword')}
            </Link>
          </p>
          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={3000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  >
                    <CloseIcon color="error" />
                  </IconButton>
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </div>
    );
  }
}
const loginRouter = withRouter(Login)
const loginComponent = withStyles(register)(loginRouter)
export default withTranslation()(loginComponent);
