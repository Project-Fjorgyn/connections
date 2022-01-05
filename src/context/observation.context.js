import React, { createContext, useState } from 'react';

export const ObservationContext = createContext();

const newUid = () => Math.floor(Date.now());
const newData = () => ({
  arthropod: {
    images: [],
    classificationLevel: 'order',
    classification: 'coleoptera',
  },
  plant: {
    images: {
      full: [],
      leaves: [],
      reproductive: [],
    },
    classificationLevel: 'clade',
    classification: 'dicotyledon',
  },
  habitat: {
    classification: 'forest',
  },
});

export function ObservationContextProvider({ children }) {
  const [uid, setUid] = useState(newUid());
  const [data, setData] = useState(newData());
  const [arthropod, setArthropod] = useState('coleoptera');
  const [habitat, setHabitat] = useState('forest');

  const onNew = () => {
    setUid(newUid());
    setData(newData());
    setArthropod('coleoptera');
    setHabitat('forest');
  };

  const onSave = () => null;

  const onLoad = (uid, data) => {
    setUid(uid);
    setData(data);
  };

  return (
    <ObservationContext.Provider
      value={{
        uid,
        data,
        arthropod,
        habitat,
        onNew,
        onSave,
        onLoad,
        setData,
        setArthropod,
        setHabitat,
      }}
    >
      {children}
    </ObservationContext.Provider>
  );
}
