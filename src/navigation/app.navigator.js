import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../theme';
import { ObservationsScreen } from '../screens/observations.screen';
import { ObserveNavigator } from './observe.navigator';
import { SettingsScreen } from '../screens/settings.screen';
import { ObservationContextProvider } from '../context/observation.context';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <ObservationContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: theme.colors.ui[0] },
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Observe') {
                iconName = focused ? 'camera' : 'camera-outline';
              } else if (route.name === 'Observations') {
                iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.ui[3],
            tabBarInactiveTintColor: theme.colors.ui[3],
          })}
        >
          <Tab.Screen name="Observe" component={ObserveNavigator} />
          <Tab.Screen name="Observations" component={ObservationsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </ObservationContextProvider>
    </NavigationContainer>
  );
}
