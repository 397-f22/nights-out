import { initializeApp } from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD2uKgi19T9EyFasJDQSLRUg6zHA8Ca5W8",
    authDomain: "nights-out-2a7ad.firebaseapp.com",
    projectId: "nights-out-2a7ad",
    storageBucket: "nights-out-2a7ad.appspot.com",
    messagingSenderId: "848035551241",
    appId: "1:848035551241:web:5f5796ae96ed06d9b640d8",
    measurementId: "G-173YQRC1KK"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};