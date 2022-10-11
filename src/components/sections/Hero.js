import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@material-ui/core'
import TextTransition, { presets } from "react-text-transition";

function Hero(props) {
  return (
    <Carousel
      animation={'slide'}
      interval={2000}
    >
      <div>
        <div style={{
          marginTop: 100,
          backgroundImage: `url(/images/slider1.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundAttachment: 'fixed'
        }}
        >
          <Grid container spacing={1} direction="row" >

            <Grid item xs={12} sm={8}>
              <div style={{ backgroundColor: '#caa943bf', marginLeft: 40 }}>
                <h2>
                  <TextTransition
                    text={'SEARCH FOR PEOPLE NEAR BY'}
                    springConfig={presets.wobbly}
                    direction={'down'}
                  /></h2>
                <h4 style={{ color: 'white', textAlign: 'center' }}>
                  <TextTransition
                    text={'Meet and chat with people near by now!'}
                    springConfig={presets.wobbly}
                    direction={'up'}
                  /></h4>
              </div>

            </Grid>
            <Grid item xs={12} sm={4} >
              <img
                src={'/images/i69-dating.png'}
                alt="Search for people near by"
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <div style={{
          marginTop: 100,
          backgroundImage: `url(/images/slider2.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundAttachment: 'fixed'
        }}

        >
          <Grid container spacing={1} direction="row" >

            <Grid item xs={12} sm={8}>
              <div style={{ marginLeft: 40 }}>
                <h1 style={{ color: '#caa943bf', textAlign: 'center' }}>
                  <TextTransition
                    text={'WELCOME TO i69'}
                    springConfig={presets.wobbly}
                    direction={'down'}
                  />
                </h1>
                <h4 style={{ color: '#caa943bf', textAlign: 'center' }}>
                  <TextTransition
                    text={'BEST FREE DATING APP!'}
                    springConfig={presets.wobbly}
                    direction={'up'}
                  /></h4>
              </div>

            </Grid>
            <Grid item xs={12} sm={4} >
              <img
                src={'/images/i69-dating.png'}
                alt="Best free dating app"
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <div style={{
          marginTop: 100,
          backgroundImage: `url(/images/slider3.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundAttachment: 'fixed'
        }}

        >
          <Grid container spacing={1} direction="row" >

            <Grid item xs={12} sm={8}>
              <div style={{ marginLeft: 40 }}>
                <h2 style={{ color: '#caa943bf', textAlign: 'center' }}>
                  <TextTransition
                    text={'ADVANTAGES'}
                    springConfig={presets.wobbly}
                    direction={'up'}
                  />
                </h2>
                <h4 style={{ color: '#caa943bf', textAlign: 'center' }}>
                  <TextTransition
                    text={'i69 IS the Best dating app ,  FREE app and SAFE  for dating'}
                    springConfig={presets.wobbly}
                    direction={'down'}
                  />
                </h4>
              </div>

            </Grid>
            <Grid item xs={12} sm={4} >
              <img
                src={'/images/i69-dating.png'}
                alt='Advantages'
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </Carousel >

  )
}

export default Hero;