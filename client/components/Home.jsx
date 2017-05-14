import React, { Component } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors';
const Home = () => {
  console.log('here');
  var register = (p) => {
    console.log(p);
  };
  var divStyle = {
    'height': '80%',
    'width': '100%',
    'marginTop': '6.5%',
    background: 'none',
    'zIndex': '0'
  };
  return (
    <div>
      <AutoRotatingCarousel
        label='Register'
        open
        style={divStyle}
        onTouchTap={() => register('hello')}
        mobile={true}
        landscape={true}
      >
        <Slide
          media={<img src='/assets/splash_02.jpeg' />}
          contentStyle={{ backgroundColor: 'transparent', opacity: '0.8' }}
          mediaBackgroundStyle={{ backgroundColor: 'transparent' }}
          mediaStyle={{ height: '100%', width: '110%', marginLeft: '-80px'}}
          title='Ever felt alone about legal issues?'
          textStyle={{ color: 'black' }}
          subtitle='Sign up and join the many who share your opinions.'
        />
        <Slide
          media={<img src='/assets/splash_01.jpeg' />}
          contentStyle={{ backgroundColor: 'transparent', opacity: '0.8' }}
          mediaBackgroundStyle={{ backgroundColor: 'transparent' }}
          mediaStyle={{ height: '100%', width: '110%', marginLeft: '-80px' }}  
          title='Class action has never been easier.'
          textStyle={{ color: 'black' }}
          subtitle='It is in fact just a click away.'
        />
        <Slide
          media={<img src='/assets/splash_03.jpg' />}
          contentStyle={{ backgroundColor: 'transparent', opacity: '0.75' }}
          mediaBackgroundStyle={{ backgroundColor: 'transparent' }}
          mediaStyle={{ height: '100%', width: '110%', marginLeft: '-80px' }}  
          title='Together, we can make a difference.'
          textStyle={{ color: 'black' }}
          subtitle='Find what class action suits are trending in your area.'
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default Home;
