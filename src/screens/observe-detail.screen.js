import React, { useContext } from 'react';

import { SafeAreaView, Button, Text } from 'react-native';
import { ObservationContext } from '../context/observation.context';

export function ObserveDetailScreen({ navigation }) {
  const { uid } = useContext(ObservationContext);
  return (
    <SafeAreaView>
      <Button title="Camera" onPress={() => navigation.navigate('ObserveCamera')} />
      <Text>Current UID: {uid}</Text>
    </SafeAreaView>
  );
}
