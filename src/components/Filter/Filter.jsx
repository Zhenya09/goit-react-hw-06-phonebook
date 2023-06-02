import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChangeInput = (evt) => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};


