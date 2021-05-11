import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import './Todo.css';
import db from './firebase';

function Todo(props) {
  return (
    <div>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar />
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
        </ListItem>
        <DeleteForeverIcon onClick={event => {
          db.collection('todos').doc(props.todo.id).delete()
        }}/> 
      </List>
    </div>
  )
}

export default Todo
