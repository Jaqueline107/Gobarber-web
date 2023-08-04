import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    margin-top: 7px;
    border-radius: 10px;
    border: 0;
    padding: 14px;
    width: 100%;
    background-color: #ff9000;
    font-weight: bold;
    font-size: 20px;
    color: #312e38;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${shade(0.2, '#ff9000')};
    }
`;
