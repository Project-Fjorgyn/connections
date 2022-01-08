import React, { useContext } from 'react';
import { Button } from 'react-native';

import { AuthContext } from '../context/auth.context';
import { AccountBackground } from '../components/account-background.components';
import { AuthInput, AuthButton } from '../components/auth.components';

export function LoginScreen() {
  const { onLogin } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AuthInput textContentType="emailAddress" keyboardType="email-address" label="Email" />
      <AuthInput textContentType="password" secureTextEntry label="Password" />
      <AuthButton onPress={onLogin}>Login with iNaturalist</AuthButton>
    </AccountBackground>
  );
}
