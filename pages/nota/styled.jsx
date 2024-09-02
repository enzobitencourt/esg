import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-top: 25%;
    gap: 35%;
`;

export const Titulo = styled.Text`
    color: #136B69;
    text-align: center;
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const Descricao = styled.Text`
    color: #000;
    text-align: center;
    font-family: "League Spartan";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 80%
`

export const AcordionView = styled.View`
    width: 90%;
    display: flex;
    flex-direction: column;
`

export const NotaContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 7%;
`

export const Nota2 = styled.View`
    border-radius: 24px;
    background: #136B69;
    width: 50%;
    padding: 4%;
`

export const NotaText = styled.Text`
    color: #FFF;
    text-align: center;
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
`

export const Pontos = styled.Text`
    color: #000;
    text-align: center;
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: capitalize;
`