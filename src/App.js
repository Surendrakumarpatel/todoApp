import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo:doc.data().todo})))
    })
  },[]);
  const addTodo = (event) => {
    //! this is fire off when we click the button
    event.preventDefault(); // It will stop REFRESHING
     
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input,])//[previous todo,'here is the new todo'];
    setInput(''); // clear up the input after add todo button
     
  }
  return (
    <div className="App">
      <h1>Hello Clever Suree🚀!</h1>
      <form>
        <FormControl>
          <InputLabel >✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />

        </FormControl>

        <Button disabled={!input} onClick={addTodo} type="submit" variant="contained" color="primary">
          Add Todo
        </Button>
        {/* <button onClick={addTodo} type="submit">Add Todo</button> */}

      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}

      </ul>
    </div>
  )
}

export default App;
