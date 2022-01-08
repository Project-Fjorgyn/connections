import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h4};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[2]};
`;

export const SubTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[1]};
`;

export const Brand = styled(Text)`
  font-family: ${(props) => props.theme.fonts.brand};
  font-size: ${(props) => props.theme.fontSizes.h1};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[2]};
`;
