import React from 'react';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import {deleteContact} from '../../redux/operations';
import {selectLoading, selectError } from '../../redux/selectors';


function ContactList() {
  // отфильтрованный список для рендера
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
   <> <div className={css.loading}>{loading && !error && <b>LOADING...</b>}</div> 
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className={css.text}>
            {name} : {number}
          </p>
          <button
            className={css.btnDelete}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul></> 
  );
}

export { ContactList };
