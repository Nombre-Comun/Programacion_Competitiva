import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

//Pages to route
import HomePage from '../pages/public/homepage/HomePage';
import LoginPage from '../pages/public/auth/Login';
import LogoutPage from '../pages/public/auth/Logout';
import Callback from '../pages/public/auth/Callback';
import EditorPage from '../pages/private/editor/EditorPage';
import RegisterForm from '../pages/public/auth/Register';

function RoutesI() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Fragment>

  );
}

export default RoutesI;