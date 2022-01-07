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
  const [plantPhotos, setPlantPhotos] = useState([]);
  const [leafPhotos, setLeafPhotos] = useState([]);
  const [flowerPhotos, setFlowerPhotos] = useState([]);

  const onNew = () => {
    setUid(newUid());
    setData(newData());
    setArthropod('coleoptera');
    setHabitat('forest');
    setArthropodPhotos([]);
    setPlantPhotos([]);
    setLeafPhotos([]);
    setFlowerPhotos([]);
  };

  const onSave = () => null;

  const onLoad = (uid, data) => {
    setUid(uid);
    setData(data);
  };

  const addPhoto = (kind, uri) => {
    let photos;
    let setter;
    if (kind === 'arthropod') {
      photos = arthropodPhotos;
      setter = setArthropodPhotos;
    } else if (kind === 'plant') {
      photos = plantPhotos;
      setter = setPlantPhotos;
    } else if (kind === 'leaf') {
      photos = leafPhotos;
      setter = setLeafPhotos;
    } else if (kind === 'flower') {
      photos = flowerPhotos;
      setter = setFlowerPhotos;
    }
    const puid = newUid();
    setter([...photos, { uid: puid, source: { uri } }]);
  };

  const removePhoto = (kind, photoUid) => {
    let photos;
    let setter;
    if (kind === 'arthropod') {
      photos = arthropodPhotos;
      setter = setArthropodPhotos;
    } else if (kind === 'plant') {
      photos = plantPhotos;
      setter = setPlantPhotos;
    } else if (kind === 'leaf') {
      photos = leafPhotos;
      setter = setLeafPhotos;
    } else if (kind === 'flower') {
      photos = flowerPhotos;
      setter = setFlowerPhotos;
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
        plantPhotos,
        leafPhotos,
        flowerPhotos,
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
