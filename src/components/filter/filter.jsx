import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from '../../redux/filterSlice';
import{selectFiltersState} from '../../redux/selectors'

function Filter() {
  const dispatch = useDispatch();
  const nameValue = useSelector(selectFiltersState);
 
// сохранение имени из  фильтра-инпута state
const handelChange = e => {
    dispatch(contactsFilter(e.target.value));
  };

  return (
    <lable className={css.filterLable}>
      Find contacts
      <input
        className={css.filterInput}
        type="text"
        value={nameValue}
        onChange={handelChange}
      />
    </lable>
  );
}

export { Filter };

