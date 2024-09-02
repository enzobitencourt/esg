import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    border-radius: 17px;
    background: #BFE0E0;
    width: 90%;
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