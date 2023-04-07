import React, {useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './navigators/AuthStack';
import {AuthContext} from '../context/AuthProvider';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';
import MainStackNavigator from './navigators/MainStack';

const AppNavigator = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  // This useEffect is just for checking if the user is logged in or not and setting our user context
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <ActivityIndicator size={'large'} />;

  return (
    <NavigationContainer>
      {!user ? <AuthStackNavigator /> : <MainStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
