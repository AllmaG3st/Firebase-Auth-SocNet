import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//@ts-ignore
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Onboarding',
          subtitle: 'A new way to connect with the world',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Onboarding',
          subtitle: 'Share Your thoughts with similar kind of people',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Onboarding',
          subtitle: 'Let The Spot Light Capture You',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
