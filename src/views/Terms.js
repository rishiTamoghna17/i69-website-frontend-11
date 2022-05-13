import React from 'react';
import { Button, Grid } from '@material-ui/core'

const Terms = () => {

  return (
    // <Paper>
    <div style={{margin: 100}}>
      <h2>Terms</h2>
      <Grid container spacing={1} direction="row" >
        <Grid item xs={12} sm={10} style = {{padding: 10}}>
          
          <p><b>on i69 All people look for different: some look for :</b>Serious Relationship , Some for Casual dating ,some for new friends, flirt , some for Roommates and some for Business Contacts.</p>
          <p>You will appear on appropriated search screen and you will be connected only to people with the same interests than you.</p>
          <h6>How to please everyone?</h6>
          <p>Use advanced settings filters by dating purpose. Chat with people with the same goals.</p>
          <h6>Would you like to make new friends considering all your preferences?</h6>
          <p>Use filters for appearance type, height range,age range, tags , family status, children and even sexual preferences…</p>
          
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" style={{ margin: 50 }} color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
            Download
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Terms;