import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { theme } from '../theme';

export const ActionButton = styled(Button).attrs({
  mode: 'contained',
  color: theme.colors.ui[3],
})`
  margin-right: ${(props) => props.theme.spacing.md};
  margin-left: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export function AddButton({ onPress, size }) {
  return (
    <TouchableOpacity style={{ margin: 25 }} onPress={onPress}>
      <Icon name="add-circle" color={theme.colors.ui[4]} size={size} />
    </TouchableOpacity>
  );
}

export function UploadButton({ onPress, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="cloud-upload" color={theme.colors.ui[4]} size={size} />
    </TouchableOpacity>
  );
}
