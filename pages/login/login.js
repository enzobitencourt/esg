import { Header, Header2, Titulo2, Botao2, Confirma, Inputs, Div2, Container3, Titulo, Cadastro, Explicativo, Cadastrar } from "./styled";
import { Icon } from 'react-native-elements';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={!showPassword}
        placeholder="**********"
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={togglePasswordVisibility}
      >
        <Icon
          name={showPassword ? 'eyeo' : 'eye'}
          size={20}
          type='antdesign'
          color="grey"
        />
      </TouchableOpacity>
    </View>
  );
};

export default function Login({navigation}) {
  return (
    <Container3>
      <Header>
        <Header2>
          <Icon name='left' type='antdesign' size='25'  onPress={() => navigation.goBack()}/>
          <Titulo2>Login</Titulo2>
          <Icon name='left' type='antdesign' color='white' size='25' />
        </Header2>
      </Header>
      <Inputs>
        <Titulo>Olá, bem vindo!</Titulo>
        <Div2>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
            />
          </View>
        </Div2>
        <Div2>
          <Text style={styles.label}>Senha</Text>
          <PasswordInput />
        </Div2>
      </Inputs>
      <Botao2 onPress={() => navigation.navigate('Home')}>
        <Confirma>Entrar</Confirma>
      </Botao2>
      <Cadastro onPress={() => navigation.navigate('Cadastro')}>
        <Explicativo>Não possui uma conta?</Explicativo>
        <Cadastrar>Cadastre-se</Cadastrar>
      </Cadastro>
    </Container3>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF1FF',
    width: '100%',
    borderRadius: '13px',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  icon: {
    padding: 10
  },
  label: {
    color: 'black',
    fontFamily: 'League Spartan',
    fontSize: 16,
    fontWeight: '500',
    width: '100%'
  },
});
