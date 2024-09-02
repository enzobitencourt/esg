import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15%;
    justify-content: space-between;
`;

export const Container2 = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10%;
`;

export const Botao2 = styled.TouchableOpacity`
    border-radius: 24px;
    background: #136B69;
    width: 65%;
    padding: 3%;
    display: flex;
    justify-content: center;
`
export const Botao = styled.TouchableOpacity`
    border-radius: 24px;
    background: #CAD6FF;
    width: 65%;
    padding: 3%;
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

export const Cadastro = styled.Text`
    color: #136B69;
    text-align: center;
    font-family: "League Spartan";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
`
