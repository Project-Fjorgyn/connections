import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ObserveDetailScreen } from '../screens/observe-detail.screen';
import { ObserveCameraScreen } from '../screens/observe-camera.screen';

const Stack = createStackNavigator();

export function ObserveNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} gesturesEnabled>
      <Stack.Screen name="ObserveDetail" component={ObserveDetailScreen} />
      <Stack.Screen
        name="ObserveCamera"
        options={{ gestureDirection: 'horizontal-inverted' }}
        component={ObserveCameraScreen}
      />
    </Stack.Navigator>
  );
}
