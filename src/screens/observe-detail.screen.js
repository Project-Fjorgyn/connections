import React from 'react';

import { SafeAreaView, Button } from 'react-native';

export function ObserveDetailScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="Camera" onPress={() => navigation.navigate('ObserveCamera')} />
    </SafeAreaView>
  );
}
