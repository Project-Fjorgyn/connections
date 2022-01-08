import React from 'react';

import { AccountBackground } from '../components/account-background.components';
import { Brand } from '../components/typography.components';
import { ActionButton } from '../components/buttons.components';

export function TitleScreen({ navigation }) {
  return (
    <AccountBackground>
      <Brand>Buggy</Brand>
      <ActionButton onPress={() => navigation.navigate('Login')}>Let's Go!</ActionButton>
    </AccountBackground>
  );
}
