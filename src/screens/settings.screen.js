import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

import { AuthContext } from '../context/auth.context';
import { SafeArea, SectionHeader } from '../components/containers.components';
import { Title, SubTitle } from '../components/typography.components';
import { theme } from '../theme';

const Options = styled(ScrollView)`
  flex: 1;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.ui[2]};
`;

const AvatarContainer = styled(View)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui[2]};
  padding-top: ${(props) => props.theme.spacing.md};
`;

export function SettingsScreen() {
  const { onLogout } = useContext(AuthContext);
  return (
    <SafeArea>
      <SectionHeader>
        <Title>Settings</Title>
      </SectionHeader>
      <AvatarContainer>
        <Avatar.Icon size={100} icon="human" backgroundColor={theme.colors.ui[4]} />
        <SubTitle>buggy@gmail.com</SubTitle>
      </AvatarContainer>
      <Options>
        <List.Section>
          <List.Item
            style={{ padding: 16 }}
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </Options>
    </SafeArea>
  );
}
