import styled from "styled-components";

export const Container = styled.View`
    border-radius: 17px;
    background: #BFE0E0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5%;
    gap: 5%;
`

export const Titulo = styled.Text`
    color: #136B69;
    font-family: "League Spartan";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Descricao = styled.Text`
    color: #000;
    font-family: "League Spartan";
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Status = styled.View`
    width: 50%;
    padding: 2%;
    border-radius: 13px;
    background: #FFF;
`

export const StatusEscrito = styled.Text`
    color: red;
    font-family: "League Spartan";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Div = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 3%;
    justify-content: space-between;
`

export const Validar = styled.TouchableOpacity`
    border-radius: 18px;
    background: #FFF;
    width: 45%;
    display: flex;
    justify-content: center;
    padding: 2%;
`

export const Excluir = styled.TouchableOpacity`
    border-radius: 18px;
    background: #136B69;
    display: flex;
    justify-content: center;
    padding: 2%;
    width: 52%;
`

export const ValidarText = styled.Text`
    color: #136B69;
    text-align: center;
    font-family: "League Spartan";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

export const ExcluirText = styled.Text`
    color: #FFF;
    text-align: center;
    font-family: "League Spartan";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`