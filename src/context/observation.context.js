import React, { createContext, useState, useContext } from 'react';
import { ObservationListContext } from './observation-list.context';

export const ObservationContext = createContext();

const newUid = () => Math.floor(Date.now());

export function ObservationContextProvider({ children }) {
  const [uid, setUid] = useState(newUid());
  const [arthropod, setArthropod] = useState('coleoptera');
  const [habitat, setHabitat] = useState('forest');
  const [arthropodPhotos, setArthropodPhotos] = useState([]);
  const [plantPhotos, setPlantPhotos] = useState([]);
  const [leafPhotos, setLeafPhotos] = useState([]);
  const [flowerPhotos, setFlowerPhotos] = useState([]);

  const { addObservation } = useContext(ObservationListContext);

  const onNew = () => {
    setUid(newUid());
    setArthropod('coleoptera');
    setHabitat('forest');
    setArthropodPhotos([]);
    setPlantPhotos([]);
    setLeafPhotos([]);
    setFlowerPhotos([]);
  };

  const onSave = () => {
    const observation = {
      uid,
      arthropod,
      habitat,
      arthropodPhotos,
      plantPhotos,
      leafPhotos,
      flowerPhotos,
    };
    addObservation(observation);
    onNew();
  };

  const onLoad = ({
    uid,
    arthropod,
    habitat,
    arthropodPhotos,
    plantPhotos,
    leafPhotos,
    flowerPhotos,
  }) => {
    setUid(uid);
    setArthropod(arthropod);
    setHabitat(habitat);
    setArthropodPhotos(arthropodPhotos);
    setPlantPhotos(plantPhotos);
    setLeafPhotos(leafPhotos);
    setFlowerPhotos(flowerPhotos);
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
        arthropod,
        arthropodPhotos,
        plantPhotos,
        leafPhotos,
        flowerPhotos,
        habitat,
        onNew,
        onSave,
        onLoad,
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
