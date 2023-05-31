import React from 'react';
import { Button, Grid } from '@material-ui/core'

const FAQ = () => {

  return (
    // <Paper>
    <div style={{margin: 100}}>
      <h2>FAQ</h2>
      <Grid container spacing={1} direction="row" >
        <Grid item xs={12} sm={10} style = {{padding: 10}}>
          <h6>What is i69 social?</h6>
          <p><b>We believe that people, should connect naturally.</b>Our team is determined to bring you an app that makes it naturally and easy to find and connect with other people. Whether it is sports, ideas, values, politics, etc – we want you to connect with people based on things that you actually care about.</p>
          
          <h6>How do matches work?</h6>
          <p>When another user finds your profile in a search result, they can opt to send you a message. or you can also initiate a chat with any user</p>
          
          <h6>How many searches can I perform in a day?</h6>
          <p>There are no limits on the number of searches that a user can perform. Once you find someone interesting – initiate a conversation, and start chatting!</p>
          
          <h6>How many conversations can I initiate per day?</h6>
          <p>There are no limits on the number of searches that a user can perform. Once you find someone interesting – initiate a conversation, and start chatting!</p>
          
          <h6>What are profile tags?</h6>
          <p>Profile tags are an easy and fun way to express either your personality type, core values, or personal interests. Use a combination of several profile tags to quickly and easily stand out as a unique individual!</p>
          
          <h6>Can I filter search results?</h6>
          <p>Users can absolutely filter search results in multiple ways. The search tab presents multiple criteria for screening matches – based on distance, age, political interests, zodiac sign, etc! It is even possible to filter by tags. If that isn’t enough – feel free to enter an optional keyword in the search bar, and see which users have that keyword in their profile. I69 social users can apply up to 2 profile tags on a search.</p>
          <p>I69 social users will also have access to the “most active” and “popular” filters which appear above search results. Upgrade now to try out these unique filters!</p>
          
          <h6>There are a lot of other  dating apps out there. What makes connecting i69 social unique?</h6>
          <p>We are not a publicly-listed company , connecting i69 social is comprised of ordinary people like you, who want to meet other, cool people, and do fun things. We want to facilitate fun conversations. We want to facilitate cool activities. We want to change the way people connect by making it easier, better, and more fun.</p>
          
          <h6>Can I use connecting i69 social to find roommates?</h6>
          <p>Absolutely!</p>

          <h6>Can I use connecting i69 social to find business partners? A business mentor? Industry connections?</h6>
          <p>Absolutely! Yes</p>
          
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" style={{ margin: 50 }} color="secondary" href="https://play.google.com/store/apps/details?id=com.i69app.i69app&pli=1" target="_blank">
            Download
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default FAQ;