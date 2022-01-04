import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h4};
`;
