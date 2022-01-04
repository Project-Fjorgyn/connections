import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './src/navigation';
import { AuthContextProvider } from './src/context/auth.context';

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
      <StatusBar style="auto" />
    </AuthContextProvider>
  );
}
