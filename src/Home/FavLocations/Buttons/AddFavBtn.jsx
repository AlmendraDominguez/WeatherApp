import React, { useContext, useEffect, useState } from 'react'
import {collection,doc,getDocs, deleteDoc, addDoc} from 'firebase/firestore'
import { db } from '../../../firebaseConfig/firebase';
import { UserContext } from '../../../context/userContext';

export const AddFavBtn = ({uid,cityName}) => {
  const [newItem,setItem] = useState()
  const { FavLocations,setFavLocations } = useContext(UserContext)

  const getLocations = async(uid) =>  {
    const querySnapshot = await getDocs(collection(db, `/Clientes/${uid}/Favoritos`));
    setFavLocations(querySnapshot.docs.map(doc => ({id: doc.id,...doc.data()}) ))
  }
        
   const addFavLocations = async(uid,cityName) => {
      console.log(cityName);
      const favoritesCollection = collection(db, `/Clientes/${uid}/Favoritos`)
      await addDoc(favoritesCollection, {
        cityName,
      })
      getLocations(uid)            
    }   

  return (
    <button onClick={()=> addFavLocations(uid,cityName)} className='heart_buttons'>
      <img src="./iconos/corazon.png" alt="Agregar a Favoritos" />
    </button>
  )
}
