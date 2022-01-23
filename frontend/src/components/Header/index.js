import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from './styles';

export default function Header() {
    // useSelector gets the current redux state. This is used to get data from Reducers.
    const profile = useSelector((state) => state.user.profile);

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
                            <Link to="/profile">My profile</Link>
                        </div>

                        <img
                            src={
                                profile.avatar
                                    ? profile.avatar.url
                                    : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
                            alt={profile.name}
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
