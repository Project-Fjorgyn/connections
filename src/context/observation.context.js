import React, { createContext, useState } from 'react';

export const ObservationContext = createContext();

const mockImages = [
  require('../../assets/guide_icons/arthropods/coleoptera.png'),
  require('../../assets/guide_icons/arthropods/formicidae.png'),
  require('../../assets/guide_icons/arthropods/orthoptera.png'),
];

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
  const [arthropodPhotos, setArthropodPhotos] = useState([]);

  const onNew = () => {
    setUid(newUid());
    setData(newData());
    setArthropod('coleoptera');
    setHabitat('forest');
    setArthropodPhotos([]);
  };

  const onSave = () => null;

  const onLoad = (uid, data) => {
    setUid(uid);
    setData(data);
  };

  const addPhoto = (kind) => {
    let photos;
    let setter;
    if (kind === 'arthropod') {
      photos = arthropodPhotos;
      setter = setArthropodPhotos;
    }
    const source = mockImages[Math.floor(Math.random() * mockImages.length)];
    const puid = newUid();
    setter([...photos, { uid: puid, source }]);
  };

  const removePhoto = (kind, photoUid) => {
    let photos;
    let setter;
    if (kind === 'arthropod') {
      photos = arthropodPhotos;
      setter = setArthropodPhotos;
    }
    setter(photos.filter(({ uid }) => uid !== photoUid));
  };

  return (
    <ObservationContext.Provider
      value={{
        uid,
        data,
        arthropod,
        arthropodPhotos,
        habitat,
        onNew,
        onSave,
        onLoad,
        setData,
        setArthropod,
        setHabitat,
        addPhoto,
        removePhoto,
      }}
    >
      {children}
    </ObservationContext.Provider>
  );
}
