import styled from 'styled-components';
import { shade } from 'polished';

import BackgroundSigIn from '../../assets/signIn.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    img {
        width: 250px;
        max-width: 100%;
    }

    form {
        margin: 50px 0;
        width: 340px;
        text-align: center;
    }

    h1 {
        margin-bottom: 57px;
    }

    a {
        color: #ffff;
        display: block;
        margin-top: 3px;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }

    > a {
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundSigIn});
    background-size: cover;
    opacity: 90%;
`;
