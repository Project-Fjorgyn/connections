import React, { createContext, useState } from 'react';

export const ObservationListContext = createContext();

export function ObservationListContextProvider({ children }) {
  const [observations, setObservations] = useState([]);

  const addObservation = (observation) => {
    setObservations([...observations, observation]);
  };

  const removeObservation = (uid) => {
    setObservations(observations.filter((observation) => observation.uid !== uid));
  };

  return (
    <ObservationListContext.Provider
      value={{
        observations,
        addObservation,
        removeObservation,
      }}
    >
      {children}
    </ObservationListContext.Provider>
  );
}
