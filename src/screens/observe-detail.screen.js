import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Button } from 'react-native';

import { ObservationContext } from '../context/observation.context';
import { Title } from '../components/typography.components';
import { SectionHeader } from '../components/containers.components';
import { ClassificationSelector } from '../components/classification-selector.components';

export function ObserveDetailScreen({ navigation }) {
  const { data, setData } = useContext(ObservationContext);

  const setHabitat = (option) => {
    data.habitat.classification = option.classification;
    setData(data);
  };

  const setArthropod = (option) => {
    data.arthropod.classification = option.classification;
    data.arthropod.classificationLevel = option.classificationLevel;
    setData(data);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <SectionHeader>
          <Title>The Arthropod</Title>
        </SectionHeader>
        <ClassificationSelector
          kind="arthropods"
          classification={data.arthropod.classification}
          setClassification={setArthropod}
        />
        <SectionHeader>
          <Title>The Plant</Title>
        </SectionHeader>
        <SectionHeader>
          <Title>The Habitat</Title>
        </SectionHeader>
        <ClassificationSelector
          kind="habitats"
          classification={data.habitat.classification}
          setClassification={setHabitat}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
