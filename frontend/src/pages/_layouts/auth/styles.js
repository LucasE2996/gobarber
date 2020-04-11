import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(to top, #ad5389, #3c1053);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #ff8a80;
            font-weight: bold;
            align-self: center;
            margin-bottom: 10px;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #fff;
            font-weight: bold;
            color: #666;
            border: 0;
            border-radius: 4px;
            font-size: 14px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.1, '#fff')};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
`;
