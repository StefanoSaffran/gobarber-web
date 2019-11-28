import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/gobarber-logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter e-mail" />
        <Input name="password" type="password" placeholder="Enter password" />

        <button type="submit">{loading ? 'Loading...' : 'Sign in'}</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
