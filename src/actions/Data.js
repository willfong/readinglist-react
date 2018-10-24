import { dbTodo } from '../firebase';
import { DATA_INSERT, DATA_SELECT, DATA_DELETE, DATA_UPDATE } from "./types";

export const dataInsert = (uid, data) => async dispatch => {
    const payload = {uid, data}; 
    //const newPostKey = dbTodo.push().key;
    dbTodo.push(payload);
    dispatch({
        type: DATA_INSERT
    });
}

export const dataSelect = () => async dispatch => {
    dbTodo.on('value', snapshot => {
      dispatch({
        type: DATA_SELECT,
        payload: snapshot.val()
      });
    });
};

export const dataDelete = (uid, id) => async dispatch => {
  dbTodo.child(id).remove();
  dispatch({
      type: DATA_DELETE
  });
}

export const dataUpdate = (uid, id, data) => async dispatch => {
  const payload = {uid, data}; 
  dbTodo.child(id).update(payload);
  dispatch({
    type: DATA_UPDATE
  });
}