import React from 'react';
import AppNavigator from './src/navigation';
import {AuthProvider} from './src/context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
