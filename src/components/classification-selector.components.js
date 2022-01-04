import React, { useState } from 'react';
import { List } from 'react-native-paper';

export function ClassificationSelector() {
  const [expanded, setExpanded] = useState(false);
  const [selectionTitle, setSelectionTitle] = useState('Coleoptera');

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section>
      <List.Accordion
        title={selectionTitle}
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Coleoptera" onPress={() => setSelectionTitle('Coleoptera')} />
        <List.Item title="Hymenoptera" onPress={() => setSelectionTitle('Hymenoptera')} />
      </List.Accordion>
    </List.Section>
  );
}
