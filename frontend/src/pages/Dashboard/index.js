import React from 'react';
import api from '~/services/api';

import { Title } from './styles';

export default function Main() {
    api.get('appointments');

    return (
        <div>
            <Title>Dashboard</Title>
            <p>Subtitle with HTML tag</p>
        </div>
    );
}
