import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components';

import { Title } from '../components/typography.components';
import { ObservationContext } from '../context/observation.context';
import { PhotoSection, SectionHeader } from '../components/containers.components';
import { PhotoSelection } from '../components/photo.components';

const CameraButton = styled(TouchableOpacity)`
  position: absolute;
  z-index: 10;
  bottom: 5%;
  left: 50%;
  background-color: ${(props) => props.theme.colors.ui[4]};
  border-radius: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.sm};
`;

const CameraView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui[0]};
`;

export function ObserveCameraScreen({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { arthropodPhotos, plantPhotos, leafPhotos, flowerPhotos, removePhoto, addPhoto } =
    useContext(ObservationContext);

  const { kind } = route.params;

  const photos = {
    arthropod: arthropodPhotos,
    plant: plantPhotos,
    leaf: leafPhotos,
    flower: flowerPhotos,
  };

  const titles = {
    arthropod: 'The Arthropod',
    plant: 'Full Plant',
    leaf: 'Leaves',
    flower: 'Flower/Fruit',
  };

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      addPhoto(kind, photo.uri);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <CameraView>
        <SectionHeader>
          <Title>{titles[kind]}</Title>
        </SectionHeader>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={(camera) => (cameraRef.current = camera)}
        />
        <CameraButton onPress={snap}>
          <Title>Capture</Title>
        </CameraButton>
      </CameraView>
      <View>
        <PhotoSection>
          {photos[kind].map(({ source, uid }) => (
            <PhotoSelection key={uid} source={source} onDelete={() => removePhoto(kind, uid)} />
          ))}
        </PhotoSection>
      </View>
    </>
  );
}
