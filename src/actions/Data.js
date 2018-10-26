import { dbUsers, currentTs } from '../firebase';
import { DATA_INSERT, DATA_SELECT, DATA_DELETE, DATA_UPDATE, BOOK_READ } from "./types";

export const dataInsert = (uid, data) => async dispatch => {
    dbUsers.child(uid).push({name: data, startedOn: currentTs});
    dispatch({
        type: DATA_INSERT
    });
}

export const dataSelect = (uid) => async dispatch => {
    dbUsers.child(uid).on('value', snapshot => {
      dispatch({
        type: DATA_SELECT,
        payload: snapshot.val()
      });
    });
};

export const dataDelete = (uid, id) => async dispatch => {
  dbUsers.child(uid).child(id).remove();
  dispatch({
      type: DATA_DELETE
  });
}

export const readBook = (uid, id, d) => async dispatch => {
  dbUsers.child(uid).child(id).child('reads').push(d);
  dispatch({
    type: BOOK_READ
  });
}


export const dataUpdate = (uid, id, data) => async dispatch => {
  const payload = {uid, data}; 
  dbUsers.child(id).update(payload);
  dispatch({
    type: DATA_UPDATE
  });
}
