import { View, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const SectionHeader = styled(View)`
  background-color: ${(props) => props.theme.colors.ui[0]};
`;

export const ButtonRow = styled(View)`
  background-color: ${(props) => props.theme.colors.ui[0]};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FullScrollView = styled(ScrollView)`
  flex: 1;
  flex-grow: 1;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-grow: 1;
`;
