// import { lazy, Suspense, useState } from "react";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
// import { Routes, Route } from "react-router"
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';
import css from './App.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/Contacts/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Getting user data please wait...</strong>
  ) : (
    
   <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/"
                />
                }     />
          <Route
                path="/login"
                element={
                  <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
                }   />
            <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
                }   />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
  </Layout>
  );
}
  