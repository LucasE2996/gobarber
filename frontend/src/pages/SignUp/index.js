import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form>
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Your email" />
                <input type="password" placeholder="Your password" />

                <button type="submit">Sign up</button>
                <Link to="/">Already have an account</Link>
            </form>
        </>
    );
}
