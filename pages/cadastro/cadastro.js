import { Header, Header2, Titulo2, Botao2, Confirma, Inputs, Div2, Container3, Titulo, CadastroContainer, Explicativo, Cadastrar, Explicativo2 } from "./styled";
import { Icon } from 'react-native-elements';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useState } from "react";
import RNPickerSelect from 'react-native-picker-select';

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

export default function Cadastro({navigation}) {
  const [selectedValue, setSelectedValue] = useState('');
  const ufs = [
    { label: 'Acre', value: 'AC' },
    { label: 'Alagoas', value: 'AL' },
    { label: 'Amapá', value: 'AP' },
    { label: 'Amazonas', value: 'AM' },
    { label: 'Bahia', value: 'BA' },
    { label: 'Ceará', value: 'CE' },
    { label: 'Distrito Federal', value: 'DF' },
    { label: 'Espírito Santo', value: 'ES' },
    { label: 'Goiás', value: 'GO' },
    { label: 'Maranhão', value: 'MA' },
    { label: 'Mato Grosso', value: 'MT' },
    { label: 'Mato Grosso do Sul', value: 'MS' },
    { label: 'Minas Gerais', value: 'MG' },
    { label: 'Pará', value: 'PA' },
    { label: 'Paraíba', value: 'PB' },
    { label: 'Paraná', value: 'PR' },
    { label: 'Pernambuco', value: 'PE' },
    { label: 'Piauí', value: 'PI' },
    { label: 'Rio de Janeiro', value: 'RJ' },
    { label: 'Rio Grande do Norte', value: 'RN' },
    { label: 'Rio Grande do Sul', value: 'RS' },
    { label: 'Rondônia', value: 'RO' },
    { label: 'Roraima', value: 'RR' },
    { label: 'Santa Catarina', value: 'SC' },
    { label: 'São Paulo', value: 'SP' },
    { label: 'Sergipe', value: 'SE' },
    { label: 'Tocantins', value: 'TO' },
  ];


  return (
    <Container3>
      <Header>
        <Header2>
          <Icon name='left' type='antdesign' size='25'  onPress={() => navigation.goBack()} />
          <Titulo2>Nova Conta</Titulo2>
          <Icon name='left' type='antdesign' color='white' size='25' />
        </Header2>
      </Header>
      <Inputs>
        <Div2>
          <Text style={styles.label}>Identificação</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Nome da instituição"
            />
          </View>
        </Div2>
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
          <Text style={styles.label}>Número de Telefone</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="(99) 99999-9999"
            />
          </View>
        </Div2>
        <Div2>
          <Text style={styles.label}>CNPJ</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="*********/****-**"
            />
          </View>
        </Div2>
        <Div2>
          <Text style={styles.label}>UF</Text>
          <View style={styles.container}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedValue(value)}
              items={ufs}
              style={pickerSelectStyles}
            />
          </View>
        </Div2>
        <Div2>
          <Text style={styles.label}>Senha</Text>
          <PasswordInput />
        </Div2>
        <Div2>
          <Text style={styles.label}>Confirme Sua Senha</Text>
          <PasswordInput />
        </Div2>
      </Inputs>
      <Explicativo2>Ao continuar, você concorda com os termos de uso e a política de privacidade.</Explicativo2>
      <Botao2 onPress={() => navigation.navigate('Login')}>
        <Confirma>Cadastrar</Confirma>
      </Botao2>
      <CadastroContainer onPress={() => navigation.navigate('Login')}>
        <Explicativo>Já possui uma conta?</Explicativo>
        <Cadastrar>Entrar</Cadastrar>
      </CadastroContainer>
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
  pickerContainer: {
    width: '100%',
    marginVertical: 10,
  },
  picker: {
    height: 50,
    backgroundColor: '#ECF1FF',
    borderRadius: 13,
  },
  label2: {
    color: 'black',
    fontFamily: 'League Spartan',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
});
