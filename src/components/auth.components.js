import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

import { theme } from '../theme';

export const AuthButton = styled(Button).attrs({
  color: theme.colors.ui[4],
  mode: 'contained',
  icon: 'lock-open-outline',
})`
  padding: 10px;
  margin: 10px;
`;

export const AuthInput = styled(TextInput).attrs({
  flat: true,
  autoCapitalize: 'none',
})`
  max-height: 64px;
  width: 300px;
  margin: 10px;
`;
