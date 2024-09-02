import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5%;
    margin-top: 10%;
    margin-bottom: 2%;
    justify-content: space-between;
`

export const Titulo = styled.Text`
    color: #136B69;
    text-align: center;
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
`

export const Base = styled.View`
    border-radius: 17px;
    background: #BFE0E0;
    width: 90%;
    padding: 5%;
    margin-bottom: 12%;
`

export const Fundo = styled.View`
    border-radius: 17px;
    background: white;
    width: 70%;
    padding-vertical: 5%;
    padding-horizontal: 3%;
`

export const Descricao = styled.Text`
    color: #000;
    font-family: "League Spartan";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
`

export const Container2 = styled.View`
    width: 90%;
    border-top-width: 1px;
    border-bottom-width: 1px;
    padding-vertical: 5%;
    border-color: #136B69;
    gap: 8%;
`;

export const Container3 = styled.View`
    width: 90%;
    border-bottom-width: 1px;
    padding-vertical: 5%;
    border-color: #136B69;
    gap: 8%;
`;

export const Data = styled.View`
    border-radius: 18px;
    border: 1px solid #136B69;
    background: #136B69;
    width: 60%;
    padding: 2%;
    justify-content: center;
`

export const DataText = styled.Text`
    color: #FFF;
    font-family: "League Spartan";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
`

export const DiaHoraText = styled.Text`
    color: #136B69;
    font-family: "League Spartan";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`

export const Div = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

export const Caracteristica = styled.Text`
    color: #000;
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: capitalize;
`

export const Valor = styled.Text`
    color: #000;
    text-align: right;
    font-family: "League Spartan";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
`

export const ExplicacaoContainer = styled.View`
    display: flex;
    width: 90%;
    flex-direction: column;
    gap: 15%;
    padding-vertical: 5%;
`

export const Explicacao = styled.Text`
    color: #000;
    font-family: "League Spartan";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 80%;
`

export const Importar = styled.TouchableOpacity`
    border-radius: 18px;
    border: 1px solid #136B69;
    background: #FFF;
    width: 65%;
    padding-vertical: 1%;
`

export const ImportarText = styled.Text`
    color: #136B69;
    text-align: center;
    font-family: "League Spartan";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`