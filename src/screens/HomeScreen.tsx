import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FormButton from '../components/FormButton';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <FormButton buttonTitle="Logout" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
