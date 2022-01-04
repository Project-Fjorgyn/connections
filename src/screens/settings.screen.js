import React, { useContext } from 'react';
import { SafeAreaView, Button } from 'react-native';

import { AuthContext } from '../context/auth.context';

export function SettingsScreen() {
  const { onLogout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Button title="Logout" onPress={onLogout} />
    </SafeAreaView>
  );
}
