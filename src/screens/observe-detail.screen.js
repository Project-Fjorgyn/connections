import React, { useContext } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { ObservationContext } from '../context/observation.context';
import { Title } from '../components/typography.components';
import {
  SectionHeader,
  ButtonRow,
  FullScrollView,
  SafeArea,
} from '../components/containers.components';
import { ClassificationSelector } from '../components/classification-selector.components';
import { ActionButton } from '../components/buttons.components';

export function ObserveDetailScreen({ navigation }) {
  const { arthropod, setArthropod, habitat, setHabitat, onNew } = useContext(ObservationContext);

  return (
    <SafeArea>
      <FullScrollView>
        <SectionHeader>
          <Title>The Arthropod</Title>
        </SectionHeader>
        <ClassificationSelector
          kind="arthropods"
          classification={arthropod}
          setClassification={(option) => setArthropod(option.classification)}
        />
        <SectionHeader>
          <Title>The Plant</Title>
        </SectionHeader>
        <SectionHeader>
          <Title>The Habitat</Title>
        </SectionHeader>
        <ClassificationSelector
          kind="habitats"
          classification={habitat}
          setClassification={(option) => setHabitat(option.classification)}
        />
      </FullScrollView>
      <ButtonRow>
        <ActionButton
          onPress={() => {
            console.log(arthropod);
            console.log(habitat);
          }}
        >
          Save
        </ActionButton>
        <ActionButton
          onPress={() => {
            onNew();
            navigation.navigate('Observations');
          }}
        >
          Cancel
        </ActionButton>
      </ButtonRow>
    </SafeArea>
  );
}
