import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Write a valid e-mail')
        .required('E-mail is required'),
    password: Yup.string().required('Password is required'),
});

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Your email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Your password"
                />

                <button type="submit">Sign in</button>
                <Link to="/signup">Sign up</Link>
            </Form>
        </>
    );
}
