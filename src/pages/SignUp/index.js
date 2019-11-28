import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/gobarber-logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password minlength 6 characters')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Enter fullname" />
        <Input name="email" type="email" placeholder="Enter e-mail" />
        <Input name="password" type="password" placeholder="Enter password" />

        <button type="submit">
          {loading ? 'Loading...' : 'Create account'}
        </button>
        <Link to="/">I Already have an account</Link>
      </Form>
    </>
  );
}
