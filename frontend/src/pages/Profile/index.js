import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    async function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Full Name" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Your e-mail address"
                />

                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Old password"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="New password"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                />

                <button type="submit">Update profile</button>
            </Form>

            <button type="button">Logout</button>
        </Container>
    );
}
