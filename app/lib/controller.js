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
export const addItem = async (collectionName, userData) => {
  // addDoc is a function that adds a document to a collection
  try {
    await addDoc(collection(db, collectionName), userData);
  } catch (error) {
    // Ashlyn add's catch error first
    console.error(`Error adding ${itemName} to Collection ${collectionName}`);
  }
};

// 4. read all entries
export const getItems = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(`Error reading collection: ${collectionName}`, error);
  }
};
// 5. Update an Entry
export const updateItem = async (id, collectionName, userData) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await updateDoc(itemDoc, userData);
  } catch (error) {
    console.error(`Error Updating: ${id} ${newName}`, error);
  }
};
// 6. Delete an Entry

export const deleteItem = async (id, collectionName) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error(`Error deleting ${id}`);
  }
};
