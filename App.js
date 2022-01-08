import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as usePTSerif, PTSerif_400Regular } from '@expo-google-fonts/pt-serif';

import { theme } from './src/theme';
import { Navigation } from './src/navigation';
import { AuthContextProvider } from './src/context/auth.context';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [ptLoaded] = usePTSerif({
    PTSerif_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !ptLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
