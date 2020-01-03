import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '~/components/Notifications';

import logo from '~/assets/gobarber-header.svg';
import { Container, Content, Preview, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Preview
              src={
                (profile.avatar && profile.avatar.url) ||
                `https://api.adorable.io/avatar/50/${profile.name}.png`
              }
              alt="Stefano Saffran"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
