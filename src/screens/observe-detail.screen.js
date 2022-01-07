import React, { useContext } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { ObservationContext } from '../context/observation.context';
import { Title } from '../components/typography.components';
import {
  SectionHeader,
  ButtonRow,
  FullScrollView,
  SafeArea,
  PhotoSection,
  Section,
} from '../components/containers.components';
import { ClassificationSelector } from '../components/classification-selector.components';
import { ActionButton, AddButton } from '../components/buttons.components';
import { PhotoSelection, PhotoContainer } from '../components/photo.components';
import { theme } from '../theme';

export function ObserveDetailScreen({ navigation }) {
  const {
    arthropod,
    setArthropod,
    arthropodPhotos,
    removePhoto,
    addPhoto,
    habitat,
    setHabitat,
    onNew,
  } = useContext(ObservationContext);

  return (
    <SafeArea>
      <FullScrollView>
        <Section>
          <SectionHeader>
            <Title>The Arthropod</Title>
          </SectionHeader>
          <PhotoSection>
            {arthropodPhotos.map(({ source, uid }) => (
              <PhotoSelection
                key={uid}
                source={source}
                onDelete={() => removePhoto('arthropod', uid)}
              />
            ))}
            <AddButton onPress={() => addPhoto('arthropod')} />
          </PhotoSection>
          <ClassificationSelector
            kind="arthropods"
            classification={arthropod}
            setClassification={(option) => setArthropod(option.classification)}
          />
        </Section>
        <Section>
          <SectionHeader>
            <Title>The Plant</Title>
          </SectionHeader>
        </Section>
        <Section>
          <SectionHeader>
            <Title>The Habitat</Title>
          </SectionHeader>
          <ClassificationSelector
            kind="habitats"
            classification={habitat}
            setClassification={(option) => setHabitat(option.classification)}
          />
        </Section>
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
