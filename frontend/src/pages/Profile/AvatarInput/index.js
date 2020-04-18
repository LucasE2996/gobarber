import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
    /**
     * useField will get the avatar value from profile data which is passed on Profile component (inside Field)
     * this is possible due @rocketseat/unform From component alongside useField
     * {@link defaultValue} and {@link registerField} are also fields inside useField
     */

    const { defaultValue, registerField } = useField('avatar');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        registerField({
            name: 'avatar_id',
            ref: ref.current,
            path: 'dataset.file',
        });
    }, [ref, registerField]);

    async function handleChange(e) {
        // this FormData is format multer can understand (multi part form data)
        const data = new FormData();

        // input type file accepts more than one file (array), so we need to get the one that we want
        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, url } = response.data.file;

        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="avatar">
                <img
                    src={
                        preview ||
                        'https://api.adorable.io/avatars/120/abott@adorable.png'
                    }
                    alt="avatar"
                />

                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
        </Container>
    );
}
