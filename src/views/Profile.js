import React, { Component, useEffect, useState } from "react";
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

const Profile = (props) => {
  const { classes } = props;
  const [state, setState] = useState({
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
  })

  useEffect(() => {
    const uid = localStorage.getItem('uid')
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    firebase.database()
      .ref(`users/${uid}`).on('value', (snapshot) => {
        console.log(snapshot.val());
        let data = snapshot.val()
        setState({
          ...state,
          age: data.age,
          gender: data.gender,
          politics: data.politics,
          ethnicity: data.ethnicity,
          religiousBeliefs: data.religiousBeliefs,
          zodiacSign: data.zodiacSign,
          height: data.height,
          familyPlans: data.familyPlans,
          image_url: data.photos,
          uname: data.name
        })

      })
  }, [])

  const errorClose = e => {
    setState({
      ...state,
      errorOpen: false
    });
  };

  const handleChange = name => e => {
    setState({
      ...state,
      [name]: e.target.value
    });
  };

  const imageSelect = (event) => {
    setState({
      ...state,
      image_url: URL.createObjectURL(event.target.files[0]),
      upload_file: event.target.files[0]
    })
  }

  const passwordMatch = () => state.password === state.passwordConfrim;

  const showPassword = () => {
    setState(prevState => ({ ...state, hidePassword: !prevState.hidePassword }));
  };

  const isValid = () => {
    if (state.email === "") {
      return false;
    }
    return true;
  };


  const updateProfile = e => {
    e.preventDefault();

    const uid = localStorage.getItem('uid')
    if (state.upload_file != '') {
      const storage = firebase.storage()
      const uploadTask = storage.ref(`${uid}/${state.upload_file.name}`).put(state.upload_file)
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
          storage.ref(uid).child(state.upload_file.name).getDownloadURL()
            .then(fireBaseUrl => {
              this.setState({
                image_url: fireBaseUrl
              })
              firebase.database().ref('users/' + uid).set({
                name: state.uname,
                photos: fireBaseUrl,
                age: state.age,
                gender: state.gender,
                politics: state.politics,
                ethnicity: state.ethnicity,
                religiousBeliefs: state.religiousBeliefs,
                zodiacSign: state.zodiacSign,
                height: state.height,
                familyPlans: state.familyPlans,
              })
              alert('Update success!')
            })
        })
    } else {
      firebase.database().ref('users/' + uid).set({
        name: state.uname,
        photos: state.image_url,
        age: state.age,
        gender: state.gender,
        politics: state.politics,
        ethnicity: state.ethnicity,
        religiousBeliefs: state.religiousBeliefs,
        zodiacSign: state.zodiacSign,
        height: state.height,
        familyPlans: state.familyPlans,
      })
      alert('Update success!')
    }
  }

  return (
    <div className={classes.main}>
      {/* <CssBaseline /> */}

      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          {
            state.image_url == null ? <PeopleAltIcon className={classes.icon} /> :
              <img src={state.image_url} className={classes.icon}></img>
          }
        </Avatar>
        <div>
          <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={imageSelect} />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          {/* <input type="file" onChange={this.imageSelect} /> */}
          {/* <img src={state.file} /> */}
        </div>
        <form
          className={classes.form}
          onSubmit={() => this.submitRegistration}
        >
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="uname" className={classes.labels}>
              User Name
            </InputLabel>
            <Input
              name="uname"
              type="uname"
              value={state.uname}
              autoComplete="uname"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("uname")}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="gender" className={classes.labels}>
              Gender
            </InputLabel>
            <Input
              name="gender"
              type="gender"
              value={state.gender}
              autoComplete="gender"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("gender")}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="age" className={classes.labels}>
              Age
            </InputLabel>
            <Input
              name="age"
              type="age"
              value={state.age}
              autoComplete="age"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("age")}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="politics" className={classes.labels}>
              Politics
            </InputLabel>
            <Input
              name="politics"
              type="politics"
              value={state.politics}
              autoComplete="politics"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("politics")}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="ethnicity" className={classes.labels}>
              Ethnicity
            </InputLabel>
            <Input
              name="ethnicity"
              type="ethnicity"
              value={state.ethnicity}
              autoComplete="ethnicity"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("ethnicity")}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="religiousBeliefs" className={classes.labels}>
              ReligiousBeliefs
            </InputLabel>
            <Input
              name="religiousBeliefs"
              type="religiousBeliefs"
              value={state.religiousBeliefs}
              autoComplete="religiousBeliefs"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("religiousBeliefs")}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="zodiacSign" className={classes.labels}>
              ZodiacSign
            </InputLabel>
            <Input
              name="zodiacSign"
              type="zodiacSign"
              value={state.zodiacSign}
              autoComplete="zodiacSign"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("zodiacSign")}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="height" className={classes.labels}>
              Height
            </InputLabel>
            <Input
              name="height"
              type="height"
              value={state.height}
              autoComplete="height"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("height")}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="familyPlans" className={classes.labels}>
              FamilyPlans
            </InputLabel>
            <Input
              name="familyPlans"
              type="familyPlans"
              value={state.familyPlans}
              autoComplete="familyPlans"
              className={classes.inputs}
              disableUnderline={true}
              onChange={handleChange("familyPlans")}
            />
          </FormControl>
          <Button
            fullWidth
            variant="outlined"
            className={classes.button}
            type="submit"
            onClick={updateProfile}
          >
            Update Profile
          </Button>
        </form>

        {state.error ? (
          <Snackbar
            variant="error"
            key={state.error}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={state.errorOpen}
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
                  <span> {state.error} </span>
                </div>
              }
              action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  onClick={errorClose}
                >
                  <CloseIcon color="error" />
                </IconButton>
              ]}
            />
          </Snackbar>
        ) : null}
      </Paper>
    </div>
  )
}

export default withStyles(register)(Profile);
