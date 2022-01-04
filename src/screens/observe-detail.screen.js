import React, { useContext } from 'react';
import { SafeAreaView, Button, Text, ScrollView } from 'react-native';

import { ObservationContext } from '../context/observation.context';
import { Title } from '../components/typography.components';
import { SectionHeader } from '../components/containers.components';
import { ClassificationSelector } from '../components/classification-selector.components';

export function ObserveDetailScreen({ navigation }) {
  const { uid } = useContext(ObservationContext);
  return (
    <SafeAreaView>
      <Button title="Camera" onPress={() => navigation.navigate('ObserveCamera')} />
      <Text>Current UID: {uid}</Text>
      <ScrollView>
        <SectionHeader>
          <Title>The Arthropod</Title>
        </SectionHeader>
        <ClassificationSelector />
        <SectionHeader>
          <Title>The Plant</Title>
        </SectionHeader>
        <SectionHeader>
          <Title>The Habitat</Title>
        </SectionHeader>
      </ScrollView>
    </SafeAreaView>
  );
}
