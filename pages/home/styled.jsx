import styled from "styled-components"

export const Container = styled.View`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    gap: 30%;
`

export const Container2 = styled.View`
    width: 90%;
    margin-top: 15%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const TituloContainer = styled.View`
    width: auto;
    max-width: 70vw;
    height: 10vh;
    font-family: 'Poppins';
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const Texto = styled.Text`
color: #136B69;
font-family: "League Spartan";
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
text-transform: capitalize;
`

export const Nome = styled.Text`
    color: #000;
    font-family: "League Spartan";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
export const PerfilContainer = styled.View`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
    margin-top: 1.5vh;
`

export const Perfil = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: black;
    background-size: cover;
    background-position: center;
`

export const Div = styled.View`
    display: flex;
    flex-direction: row;
    gap: 18%;
`

export const Titulo = styled.Text`
    color: #136B69;
    font-family: "League Spartan";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    width: 90%;
`

export const ContainerDoacao = styled.View`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    gap: 15%;
`

