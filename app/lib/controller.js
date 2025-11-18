// We won't hard code this, we will use Firestore SDK.

// 1. import firestore functionality

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

// 2. import our database
import { db } from "@/app/firebase/config";
// this @ means go to the root folder and find app/firebase/config.js

// 3. create db entry
// you can put export at the end, or you can put it here.
export const addItem = async (collectionName, itemName) => {
  try {
    // addDoc is a function that adds a document to a collection
    await addDoc(collection(db, collectionName), {
      name: itemName,
    });
  } catch (error) {
    console.error(
      `Error adding ${itemName}: to Collection ${collectionName}`,
      error
    );
  }
};

// 4. read all entries
export const getItems = async (collectionName) => {
  // Ashlyn add's catch error first
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(`Error getting documents from ${collectionName}`, error);
  }
};

// 5. update an entry
export const updateItem = async (id, collectionName, nwName) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await updateDoc(itemDoc, { name: newName });
  } catch (error) {
    console.error(`Error updating: ${id} ${newName}`, error);
  }
};

// 5. delete an entry
export const deleteItem = async (id, collectionName) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error(`Error deleting item with id: ${id}`, error);
  }
};
