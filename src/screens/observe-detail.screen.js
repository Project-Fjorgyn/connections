import React, { useContext } from 'react';
import { SafeAreaView, Button, Text, ScrollView } from 'react-native';

import { ObservationContext } from '../context/observation.context';
import { Title } from '../components/typography.components';

export function ObserveDetailScreen({ navigation }) {
  const { uid } = useContext(ObservationContext);
  return (
    <SafeAreaView>
      <Button title="Camera" onPress={() => navigation.navigate('ObserveCamera')} />
      <Text>Current UID: {uid}</Text>
      <ScrollView>
        <Title>The Arthropod</Title>
      </ScrollView>
    </SafeAreaView>
  );
}
