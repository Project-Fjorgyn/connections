import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { theme } from '../theme';

export const PhotoContainer = styled(View)`
  max-height: ${(props) => props.theme.spacing.xl};
  margin: ${(props) => props.theme.spacing.md};
`;

const Photo = styled(Image).attrs({
  resizeMode: 'contain',
})`
  height: ${(props) => props.theme.spacing.xl};
  width: ${(props) => props.theme.spacing.xl};
`;

export function DeleteButton({ onPress, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="highlight-off" color={theme.colors.ui[4]} size={size} />
    </TouchableOpacity>
  );
}

const Delete = styled(TouchableOpacity)`
  position: absolute;
  top: -8px;
  left: -8px;
  z-index: 1;
`;

export function PhotoSelection({ source, onDelete }) {
  return (
    <PhotoContainer>
      <Photo source={source} />
      <Delete onPress={onDelete}>
        <Icon name="remove-circle" color={theme.colors.ui[4]} size={16} />
      </Delete>
    </PhotoContainer>
  );
}
