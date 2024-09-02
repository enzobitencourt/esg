import { styled } from "styled-components";

export const Imagem = styled.View`
    background: blue;
    background-size: cover;
    background-position: center;
    border: 0.1px solid black;
    width: 90%;
    height: 18%;
    border-radius: 28.5px;
    display: flex;
    flex-direction: column-reverse;
`

export const Titulo = styled.View`
    background-color: rgba(0, 0, 0, 0.70);
    border-radius: 0 28.5px 28.5px 28.5px;
    width: 85%;
    height: 25%;
    padding: 1.5vh 0px 1.5vh 13px;
    justify-content: center;
`

export const Texto = styled.Text`
    color: #FFF;
    width: 95%;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
`