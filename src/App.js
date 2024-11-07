import React, { useEffect, useState } from 'react'
import { db } from './firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import './App.css';

export default function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const userCollectionRef = collection(db, "crud");

  const updateAge = async (id, age) => {
    const userDoc = doc(db, "crud", id);
    const newAge = { age: age + 5 };
    await updateDoc(userDoc, newAge);
  }

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: name, age: age })

  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "crud", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);

      const docsRef = data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      }))
      console.log(docsRef);
      setUsers(docsRef)
    }

    getUsers();
  }, [])
  return (
    <div className="container">
      <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
          <button onClick={() => updateAge(user.id, user.age)}>Update Age</button>
          <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
