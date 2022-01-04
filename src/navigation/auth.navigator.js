import React, { useContext } from 'react';
import { SafeAreaView, Button } from 'react-native';

import { AuthContext } from '../context/auth.context';

export function AuthNavigator() {
  const { onLogin } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Button title="Login" onPress={onLogin} />
    </SafeAreaView>
  );
}
