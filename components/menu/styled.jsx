import styled from "styled-components"

export const MenuContainer = styled.View`
    border-radius: 24px;
    background: #136B69;
    width: 90%;
    height: 55px;
    flex-shrink: 0;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    bottom: 4%;  /* Adjust as needed */
    margin-bottom: 2vh;
    align-self: center;
    padding-left: 6%;
    padding-right: 6%;
`

export const Botao = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
`;