import React from 'react';
import { SafeAreaView, Button } from 'react-native';

export function TitleScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="Go To Login" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
}
