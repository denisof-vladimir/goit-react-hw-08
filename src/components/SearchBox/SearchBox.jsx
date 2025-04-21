import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilters } from '../../redux/filters/slice';
import css from "./SearchBox.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useId } from 'react'


  
export default function SearchBox() {
    const dispatch = useDispatch();
    const handleSearch = (event) => {
      event.preventDefault();
      dispatch(changeFilters( event.target.value.toLowerCase()));
    }
    const NameFilter = useSelector(selectNameFilter);
  
    return (
        <div className={css.searchBox}>
          <label className={css.label}>
            Find contacts by name :
            <input
              className={css.input}
              type="text"
              value={NameFilter}
              onChange={(e) => handleSearch(e)}
            />
          </label>
        </div>
      );
    }