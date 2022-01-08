import React, { useContext } from 'react';

import { ObservationContext } from '../context/observation.context';
import { Title, SubTitle } from '../components/typography.components';
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
import { PhotoSelection } from '../components/photo.components';

export function ObserveDetailScreen({ navigation }) {
  const {
    arthropod,
    setArthropod,
    arthropodPhotos,
    plantPhotos,
    leafPhotos,
    flowerPhotos,
    removePhoto,
    habitat,
    setHabitat,
    onNew,
    onSave,
  } = useContext(ObservationContext);

  return (
    <SafeArea>
      <FullScrollView>
        <Section>
          <SectionHeader>
            <Title>The Arthropod</Title>
          </SectionHeader>
          <PhotoSection>
            <AddButton
              onPress={() =>
                navigation.navigate('ObserveCamera', {
                  kind: 'arthropod',
                })
              }
            />
            {arthropodPhotos.map(({ source, uid }) => (
              <PhotoSelection
                key={uid}
                source={source}
                onDelete={() => removePhoto('arthropod', uid)}
              />
            ))}
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
          <SubTitle>Full Plant</SubTitle>
          <PhotoSection>
            <AddButton
              onPress={() =>
                navigation.navigate('ObserveCamera', {
                  kind: 'plant',
                })
              }
            />
            {plantPhotos.map(({ source, uid }) => (
              <PhotoSelection
                key={uid}
                source={source}
                onDelete={() => removePhoto('plant', uid)}
              />
            ))}
          </PhotoSection>
          <SubTitle>Leaves</SubTitle>
          <PhotoSection>
            <AddButton
              onPress={() =>
                navigation.navigate('ObserveCamera', {
                  kind: 'leaf',
                })
              }
            />
            {leafPhotos.map(({ source, uid }) => (
              <PhotoSelection key={uid} source={source} onDelete={() => removePhoto('leaf', uid)} />
            ))}
          </PhotoSection>
          <SubTitle>Flower/Fruit</SubTitle>
          <PhotoSection>
            <AddButton
              onPress={() =>
                navigation.navigate('ObserveCamera', {
                  kind: 'flower',
                })
              }
            />
            {flowerPhotos.map(({ source, uid }) => (
              <PhotoSelection
                key={uid}
                source={source}
                onDelete={() => removePhoto('flower', uid)}
              />
            ))}
          </PhotoSection>
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
            if (arthropodPhotos.length) {
              onSave();
              navigation.navigate('Observations');
            }
          }}
        >
          Save
        </ActionButton>
        <ActionButton
          onPress={() => {
            onNew();
          }}
        >
          Cancel
        </ActionButton>
      </ButtonRow>
    </SafeArea>
  );
}
