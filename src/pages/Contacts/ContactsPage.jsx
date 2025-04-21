import { useState, useId, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import { fetchAll } from "../../redux/contacts/operations";
import { changeFilters } from '../../redux/filters/slice';
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  selectItems,
  selectIsLoading,
  selectIsError} from '../../redux/contacts/selectors';


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />} 
      
      <ContactForm />
      <SearchBox />
      <ContactList   />
    </>
  );
}

