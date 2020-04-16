import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from './styles';

export default function Header() {
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
                            <strong>User name</strong>
                            <Link to="/profile">My profile</Link>
                        </div>

                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="User name"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
