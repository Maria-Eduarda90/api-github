import styled from 'styled-components';

export const Container = styled.div `
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input `
    width: 500px;
    height: 50px;
    border-radius: 8px;
    outline: 0;
    border: 2px solid #6ea2d0;
    padding: 0 16px;
    font-size: 20px;
`;

export const Button = styled.button`
    background: #6ea2d0;
    width: 100px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    color: white;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
`;