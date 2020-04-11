import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form>
                <input type="email" placeholder="Your email" />
                <input type="password" placeholder="Your password" />

                <button type="submit">Sign in</button>
                <Link to="/signup">Sign up</Link>
            </form>
        </>
    );
}
