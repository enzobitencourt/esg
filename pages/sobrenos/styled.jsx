import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    justify-content: flex-start;
    background-color: #fff;
    display: flex;
    justify-content: center;
`;

export const Header = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5%;
    margin-top: 10%;
    margin-bottom: 2%;
    justify-content: center;
`

export const Titulo = styled.Text`
    color: #136B69;
    text-align: center;
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const Input = styled.TextInput`
    font-size: 16px;
    padding-vertical: 12px;
    padding-horizontal: 10px;
    border-width: 1px;
    border-color: gray;
    border-radius: 4px;
    color: black;
    padding-right: 30px;
    background-color: #BFE0E0;
    border-radius: 20px;
    margin-top: 2%;
`

export const Label = styled.Text`
    color: #000;
    font-family: "League Spartan";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

export const Texto = styled.Text`
    color: #000;
    font-family: "League Spartan";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: justify;
`

export const Botao = styled.TouchableOpacity`
    border-radius: 24px;
    background: #136B69;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Confirma = styled.Text`
    color: #FFF;
    text-align: center;
    font-family: "League Spartan";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
`

export const Meio = styled.View`
    align-items: center;
    margin-top: 10%;
    display: flex;
    height: 7%;
`