import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(updateProfileRequest(data));
  };

  const handleSignout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Enter e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Current password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button" onClick={handleSignout}>
        Logout
      </button>
    </Container>
  );
}
