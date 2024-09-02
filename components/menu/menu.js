import React from 'react';
import { Botao, MenuContainer } from './styled';
import { Icon } from 'react-native-elements';

export default function Menu(props) {
    return (
        <MenuContainer>
            <Botao onPress={() => props.navigation.navigate('Home')}>
                <Icon name='home' type='antdesign' size='35' color={props.numero === '1' ? 'white' : 'black'}/>
            </Botao>
            <Botao onPress={() => props.navigation.navigate('Nota')}>
                <Icon name='star' type='feather' size='35' color={props.numero === '2' ? 'white' : 'black'}/>
            </Botao>
            <Botao onPress={() => props.navigation.navigate('Sobrenos')}>
                <Icon name='info' type='feather' size='35' color={props.numero === '3' ? 'white' : 'black'}/>
            </Botao>
            <Botao onPress={() => props.navigation.navigate('Config')}>
                <Icon name='setting' type='antdesign' size='35' color={props.numero === '4' ? 'white' : 'black'}/>
            </Botao>
            <Botao onPress={() => props.navigation.navigate('Validacao')}>
                <Icon name='done' type='material' size='35' color={props.numero === '5' ? 'white' : 'black'}/>
            </Botao>
        </MenuContainer>
    );
}
