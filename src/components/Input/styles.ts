import styled from 'styled-components';

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 14px;
    width: 100%;
    color: #f4ede8;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 7px;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        outline: 0;
        color: #747475;

        &::placeholder {
            color: #747475;
        }
    }

    svg {
        color: #747475;
        margin-right: 15px;
    }
`;
