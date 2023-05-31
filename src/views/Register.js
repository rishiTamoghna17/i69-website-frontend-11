import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "./RegistrationStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
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
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import firebase from "firebase/app";
import firebaseConfig from '../common/firebaseConfig';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";
import 'firebase/storage'

class Registration extends Component {
  state = {
    email: "",
    password: "",
    passwordConfrim: "",
    hidePassword: true,
    uname: '',
    age: '',
    gender: '',
    politics: '',
    ethnicity: '',
    religiousBeliefs: '',
    zodiacSign: '',
    height: '',
    familyPlans: '',
    image_url: null,
    upload_file: '',
    error: null,
    errorOpen: false
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

  imageSelect = (event) => {
    this.setState({
      image_url: URL.createObjectURL(event.target.files[0]),
      upload_file: event.target.files[0]
    })
  }

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
  submitRegistration = e => {
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
    if (this.state.upload_file === '') {
      alert(`You didn't select the image file`)
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
          // Signed in 
          // ...
          console.log("sadfasdfasdf===>", data.user.uid)
          localStorage.setItem('signup', data.user.uid)
          const storage = firebase.storage()
          const uploadTask = storage.ref(`${data.user.uid}/${this.state.upload_file.name}`).put(this.state.upload_file)
          uploadTask.on('state_changed',
            (snapShot) => {
              //takes a snap shot of the process as it is happening
              console.log(snapShot)
            }, (err) => {
              //catches the errors
              console.log(err)
            }, () => {
              // gets the functions from storage refences the image storage in firebase by the children
              // gets the download url then sets the image from firebase as the value for the imgUrl key:
              storage.ref(data.user.uid).child(this.state.upload_file.name).getDownloadURL()
                .then(fireBaseUrl => {
                  this.setState({
                    image_url: fireBaseUrl
                  })
                  firebase.database().ref('users/' + data.user.uid).set({
                    name: this.state.uname,
                    photos: fireBaseUrl,
                    age: this.state.age,
                    gender: this.state.gender,
                    politics: this.state.politics,
                    ethnicity: this.state.ethnicity,
                    religiousBeliefs: this.state.religiousBeliefs,
                    zodiacSign: this.state.zodiacSign,
                    height: this.state.height,
                    familyPlans: this.state.familyPlans,
                  })
                  alert('Sign up success!')
                  this.props.history.push('/signin')
                })
            })


        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
    }


    //dispath to userActions
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        {/* <CssBaseline /> */}

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            {
              this.state.image_url == null ? <PeopleAltIcon className={classes.icon} /> :
                <img src={this.state.image_url} className={classes.icon}></img>
            }


          </Avatar>
          <div>
            <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={this.imageSelect} />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            {/* <input type="file" onChange={this.imageSelect} /> */}
            {/* <img src={this.state.file} /> */}
          </div>
          <form
            className={classes.form}
            onSubmit={() => this.submitRegistration}
          >
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="email" className={classes.labels}>
                Email
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
                Password
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
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="uname" className={classes.labels}>
                User Name
              </InputLabel>
              <Input
                name="uname"
                type="uname"
                autoComplete="uname"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("uname")}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="gender" className={classes.labels}>
                Gender
              </InputLabel>
              <Input
                name="gender"
                type="gender"
                autoComplete="gender"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("gender")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="age" className={classes.labels}>
                Age
              </InputLabel>
              <Input
                name="age"
                type="age"
                autoComplete="age"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("age")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="politics" className={classes.labels}>
                Politics
              </InputLabel>
              <Input
                name="politics"
                type="politics"
                autoComplete="politics"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("politics")}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="ethnicity" className={classes.labels}>
                Ethnicity
              </InputLabel>
              <Input
                name="ethnicity"
                type="ethnicity"
                autoComplete="ethnicity"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("ethnicity")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="religiousBeliefs" className={classes.labels}>
                ReligiousBeliefs
              </InputLabel>
              <Input
                name="religiousBeliefs"
                type="religiousBeliefs"
                autoComplete="religiousBeliefs"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("religiousBeliefs")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="zodiacSign" className={classes.labels}>
                ZodiacSign
              </InputLabel>
              <Input
                name="zodiacSign"
                type="zodiacSign"
                autoComplete="zodiacSign"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("zodiacSign")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="height" className={classes.labels}>
                Height
              </InputLabel>
              <Input
                name="height"
                type="height"
                autoComplete="height"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("height")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="familyPlans" className={classes.labels}>
                FamilyPlans
              </InputLabel>
              <Input
                name="familyPlans"
                type="familyPlans"
                autoComplete="familyPlans"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("familyPlans")}
              />
            </FormControl>
            <Button
              disabled={!this.isValid()}
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={this.submitRegistration}
            >
              Sign up
            </Button>
          </form>

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

export default withStyles(register)(Registration);
