import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

import { ARTHROPOD_CLASSIFICATIONS, HABITAT_CLASSIFICATIONS } from '../meta/classifications.meta';
import { GuideIcon } from './guide-icons.components';
import { UploadButton } from './buttons.components';

const PaddedCard = styled(Card)`
  margin-bottom: 16px;
`;

const IconRow = styled(View)`
  flex-direction: row;
  margin: ${(props) => props.theme.spacing.md};
  align-items: center;
`;

const Spacer = styled(View)`
  flex: 1;
`;

export function ObservationCard({ habitat, arthropod, arthropodPhotos, uploadObservation }) {
  return (
    <PaddedCard>
      <Card.Cover source={{ uri: arthropodPhotos[0].source.uri }} />

      <IconRow>
        <GuideIcon
          source={
            ARTHROPOD_CLASSIFICATIONS.filter(
              ({ classification }) => classification === arthropod
            )[0].icon
          }
        />
        <GuideIcon
          source={
            HABITAT_CLASSIFICATIONS.filter(({ classification }) => classification === habitat)[0]
              .icon
          }
        />
        <Spacer />
        <UploadButton size={32} onPress={uploadObservation} />
      </IconRow>
    </PaddedCard>
  );
}
