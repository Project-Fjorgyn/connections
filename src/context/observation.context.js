import React, { createContext, useState } from 'react';

export const ObservationContext = createContext();

const newUid = () => Math.floor(Date.now());
const newData = () => {};

export function ObservationContextProvider({ children }) {
  const [uid, setUid] = useState(newUid());
  const [data, setData] = useState(newData());

  const onNew = () => {
    setUid(newUid());
    setData(newData());
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
        onNew,
        onSave,
        onLoad,
      }}
    >
      {children}
    </ObservationContext.Provider>
  );
}
