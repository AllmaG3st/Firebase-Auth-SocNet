import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import FormButton from '../components/FormButton';
import {AuthContext} from '../context/AuthProvider';

type Props = {};

const HomeScreen = (props: Props) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <FormButton buttonTitle="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
