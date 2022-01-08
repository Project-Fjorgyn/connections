import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { SafeArea, SectionHeader } from '../components/containers.components';
import { ObservationListContext } from '../context/observation-list.context';
import { ObservationCard } from '../components/observation-card.components';
import { Title } from '../components/typography.components';

const ObservationsList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui[2]};
`;

export function ObservationsScreen() {
  const { observations } = useContext(ObservationListContext);

  return (
    <SafeArea>
      <SectionHeader>
        <Title>Observations</Title>
      </SectionHeader>
      <ObservationsList
        data={observations}
        renderItem={({ item }) => ObservationCard(item)}
        keyExtractor={(item) => item.uid}
      />
    </SafeArea>
  );
}
