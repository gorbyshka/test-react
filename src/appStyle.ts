import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://w.forfun.com/fetch/2e/2e510cdcf6de39db06782a7042f3613a.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const ButtonTest = styled.button`
  background-color: dodgerblue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 430px auto;
`;
