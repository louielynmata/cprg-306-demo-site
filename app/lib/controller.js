// import firestore functionality
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
// import our database
import { db } from "@/app/firebase/config";

// Create DB Entry
export const addItem = async (collectionName, itemName) => {
  try {
    await addDoc(collection(db, collectionName), {
      name: itemName,
    });
  } catch (error) {
    console.error(`Error adding ${itemName} to Collection ${collectionName}`);
  }
};

// Read All Entries
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
// Update an Entry
export const updateItem = async (id, collectionName, newName) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await updateDoc(itemDoc, { name: newName });
  } catch (error) {
    console.error(`Error Updating: ${id} ${newName}`, error);
  }
};
// Delete an Entry

export const deleteItem = async (id, collectionName) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error(`Error deleting ${id}`);
  }
};
