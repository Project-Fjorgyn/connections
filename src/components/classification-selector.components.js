import React, { useState } from 'react';
import { List } from 'react-native-paper';

import { GuideIcon } from './guide-icons.components';

const ARTHROPOD_CLASSIFICATIONS = [
  {
    title: 'Coleoptera - Beetles',
    classification: 'coleoptera',
    classificationLevel: 'order',
    icon: require('../../assets/guide_icons/arthropods/coleoptera.png'),
  },
  {
    title: 'Formicidae - Ants',
    classification: 'formicidae',
    classificationLevel: 'family',
    icon: require('../../assets/guide_icons/arthropods/formicidae.png'),
  },
  {
    title: 'Orthoptera - Grasshoppers/Crickets',
    classification: 'orthoptera',
    classificationLevel: 'family',
    icon: require('../../assets/guide_icons/arthropods/orthoptera.png'),
  },
];

const PLANT_CLASSIFICATIONS = [];

const HABITAT_CLASSIFICATIONS = [
  {
    title: 'Grassland/Meadow',
    classification: 'grassland',
    classificationLevel: null,
    icon: require('../../assets/guide_icons/habitats/grassland.png'),
  },
  {
    title: 'Forest',
    classification: 'forest',
    classificationLevel: null,
    icon: require('../../assets/guide_icons/habitats/forest.png'),
  },
  {
    title: 'Urban',
    classification: 'urban',
    classificationLevel: null,
    icon: require('../../assets/guide_icons/habitats/urban.png'),
  },
];

export function ClassificationSelector({ kind, classification, setClassification }) {
  const options = {
    arthropods: ARTHROPOD_CLASSIFICATIONS,
    plants: PLANT_CLASSIFICATIONS,
    habitats: HABITAT_CLASSIFICATIONS,
  }[kind];

  const [expanded, setExpanded] = useState(false);
  const [selection, setSelection] = useState(
    options.filter((option) => option.classification === classification)[0]
  );

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title={selection.title}
        left={() => <GuideIcon source={selection.icon} />}
        expanded={expanded}
        onPress={handlePress}
      >
        {options
          .filter((option) => option.classification !== selection.classification)
          .map((option) => (
            <List.Item
              title={option.title}
              key={option.classification}
              left={() => <GuideIcon source={option.icon} />}
              onPress={() => {
                setSelection(option);
                setExpanded(false);
                setClassification(option);
              }}
            />
          ))}
      </List.Accordion>
    </List.Section>
  );
}

ClassificationSelector.defaultProps = {
  kind: 'arthropods',
};
