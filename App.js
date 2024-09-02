import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from './pages/home/home';
import Primeira from './pages/primeira/primeira';
import Cadastro from './pages/cadastro/cadastro';
import CadastroDoacao from './pages/cadastroDoacao/cadastroDoacao';
import Config from './pages/config/config';
import Doacao from './pages/doacao/doacao';
import Login from './pages/login/login';
import Nota from './pages/nota/nota';
import SobreNos from './pages/sobrenos/sobrenos';
import Validacao from './pages/validacao/validacao';
import MeuPerfil from './pages/config/perfil/perfil';
import Senha from './pages/config/senha/senha';
import Inicio from './pages/inicio/inicio';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Primeira"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Primeira" component={Primeira} />
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="CadastroDoacao" component={CadastroDoacao} />
                <Stack.Screen name="Config" component={Config} />
                <Stack.Screen name="Doacao" component={Doacao} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Nota" component={Nota} />
                <Stack.Screen name="Sobrenos" component={SobreNos} />
                <Stack.Screen name="Validacao" component={Validacao} />
                <Stack.Screen name="MeuPerfil" component={MeuPerfil} />
                <Stack.Screen name="Senha" component={Senha} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
