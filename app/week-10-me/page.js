// This technology is created when most are of the code are in client side. Firestore is mostly used for client side. In the future, they did have server side support.

// 1. import use state and useeffect
import { useState, useEffect } from "react";
// no need to import react, it's an old next.js
import {
  addItem,
  getItems,
  updateItem,
  deleteItem,
} from "@/app/lib/controller";

// 2. import controller functions

// 3.export functions to be used in the client components

export default function Page() {
  // 4. create data input field state
  const [inputValue, setInputValue] = useState("");
  // 5. edit ID state
  // we use this to track which is being modified
  const [editId, setEditId] = useState(null);
  // 6.data state (TO BE OPTIMIZED LATER)
  // const [items, setItems] = useState("");
  const { data, error, isLoading } = useFirestorecollection("users");

  // 7. These will be the main logic
  // 7.1 handle create entry
  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;
    try {
      if (editId) {
        // update existing entry
        console.log("Updating item:", editId, inputValue);
        await updateItem(editId, "users", inputValue);
        setEditId(null); // reset editId after updating
      }
      console.log("Adding item:", inputValue);
      await addItem("users", inputValue);
      setInputValue(""); // clear input field after adding
      // Refresh the items list after adding or updating
      getItems("users");
    } catch (error) {
      console.error("Error adding item to users collection", error);
    }
  }

  // 7.2 handle edit entry
  const handleEdit = (item) => {
    setInputValue(item.name);
    setEditId(item.id);
  };

  // 7.4 Handle cancel button
  const handleCancel = () => {
    setEditId(null);
    setInputValue("");
  }

  // 7.3 handle delete entry
  const handleDelete = async(id) => {
    try {
      await deleteItem(id, "users");
    } catch (error) {
      console.error(`Error deleting item with id: ${id}`, error);
    }
  }

  // 8. fetch all data from the db
  const fetchItems = async () => {
    try {
      const items = await getItems("users");
      // always good to start with a console log to see if you are getting data
      console.log(items);
    } catch (error) {
      console.error(`Error fetching items from users`, error);
    }
  };

  // 9. use effect to call fetch data on page load
  useEffect(() => {
    fetchItems();
  }, []);
  console.log(items)
  }

  return (
    <main>
      <header>
        <h1>Next + Firestore CRUD</h1>
      </header>
      {/* section to show all the contact in the collection */}
      <section>
        <h2>List of Data Items</h2>
        <ul>
          {items.map((character)) => <li key={character.id}>
            <h3>{character.name}</h3>
            </li>}
        </ul>
      </section>

      <section>
        <label htmlFor="input-name">Add new name</label>
        {/* event trigger with keydown event */}
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        />

        <button onClick = {() => handleSubmit()}> {editId ? "Edit" : "Add"}</button>
        {editId && (<button onClick={() => {handleCancel()}}>Cancel</button>)}

      </section>

      {/* each element should have an edit and delete button */}

      {/* input field to add a new character */}
    </main>
  );
}
