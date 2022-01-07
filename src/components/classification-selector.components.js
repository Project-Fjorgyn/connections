import React, { useState } from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';

import { GuideIcon } from './guide-icons.components';

const ARTHROPOD_CLASSIFICATIONS = [
  {
    title: 'Coleoptera - Beetles',
    classification: 'coleoptera',
    icon: require('../../assets/guide_icons/arthropods/coleoptera.png'),
  },
  {
    title: 'Formicidae - Ants',
    classification: 'formicidae',
    icon: require('../../assets/guide_icons/arthropods/formicidae.png'),
  },
  {
    title: 'Orthoptera - Grasshoppers/Crickets',
    classification: 'orthoptera',
    icon: require('../../assets/guide_icons/arthropods/orthoptera.png'),
  },
];

const PLANT_CLASSIFICATIONS = [];

const HABITAT_CLASSIFICATIONS = [
  {
    title: 'Grassland/Meadow',
    classification: 'grassland',
    icon: require('../../assets/guide_icons/habitats/grassland.png'),
  },
  {
    title: 'Forest',
    classification: 'forest',
    icon: require('../../assets/guide_icons/habitats/forest.png'),
  },
  {
    title: 'Urban',
    classification: 'urban',
    icon: require('../../assets/guide_icons/habitats/urban.png'),
  },
];

const Accordion = styled(List.Accordion)`
  background-color: ${(props) => props.theme.colors.ui[2]};
`;

export function ClassificationSelector({ kind, classification, setClassification }) {
  const options = {
    arthropods: ARTHROPOD_CLASSIFICATIONS,
    plants: PLANT_CLASSIFICATIONS,
    habitats: HABITAT_CLASSIFICATIONS,
  }[kind];

  const [expanded, setExpanded] = useState(false);

  const selection = options.filter((option) => option.classification === classification)[0];

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <Accordion
        title={selection.title}
        left={() => <GuideIcon source={selection.icon} />}
        expanded={expanded}
        onPress={handlePress}
      >
        {options
          .filter((option) => option.classification !== classification)
          .map((option) => (
            <List.Item
              title={option.title}
              key={option.classification}
              left={() => <GuideIcon source={option.icon} />}
              onPress={() => {
                setExpanded(false);
                setClassification(option);
              }}
            />
          ))}
      </Accordion>
    </List.Section>
  );
}
