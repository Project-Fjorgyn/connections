import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeArea, SectionHeader } from '../components/containers.components';
import { ObservationListContext } from '../context/observation-list.context';
import { ObservationContext } from '../context/observation.context';
import { ObservationCard } from '../components/observation-card.components';
import { Title } from '../components/typography.components';

const ObservationsList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui[2]};
`;

export function ObservationsScreen({ navigation }) {
  const { observations, removeObservation } = useContext(ObservationListContext);
  const { onLoad, onNew } = useContext(ObservationContext);

  const setObservation = (observation) => {
    onLoad(observation);
  };

  const uploadObservation = (uid) => {
    removeObservation(uid);
    onNew();
  };

  return (
    <SafeArea>
      <SectionHeader>
        <Title>Observations</Title>
      </SectionHeader>
      <ObservationsList
        data={observations}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setObservation(item);
              navigation.navigate('ObserveDetail');
            }}
          >
            <ObservationCard
              habitat={item.habitat}
              arthropod={item.arthropod}
              arthropodPhotos={item.arthropodPhotos}
              uploadObservation={() => uploadObservation(item.uid)}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.uid}
      />
    </SafeArea>
  );
}
