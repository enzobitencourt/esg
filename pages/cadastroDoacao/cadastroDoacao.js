import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Botao, Confirma, Container, Header, Input, Label, Meio, Titulo } from "./styled";
import Menu from '../../components/menu/menu';
import { Icon } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

const { width: screenWidth } = Dimensions.get('window');

function ServicesScreen({ navigation }) {
  return (
    <View style={styles2.container}>
      <View>
        <Label>Categoria de Serviços</Label>
        <RNPickerSelect
          items={[
            { label: 'Veterinário', value: 'veterinario' },
            { label: 'Médico', value: 'medico' },
            { label: 'Psicólogo', value: 'psicologo' },
            { label: 'Segurança', value: 'seguranca' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Selecione um tipo de doação...',
            value: null,
            color: '#9EA0A4',
          }}
        />
      </View>
      <View>
        <Label>Local de doação</Label>
        <Input placeholder="Local da Doação..." placeholderTextColor="gray" />
      </View>
      <View>
        <Label>Descrição da Atividade</Label>
        <Input placeholder="Descrição da atividade..." placeholderTextColor="gray" />
      </View>
      <Meio>
        <Botao onPress={() => navigation.navigate('Home')}>
          <Confirma>Cadastrar doação</Confirma>
        </Botao>
      </Meio>
    </View>
  );
}

function ProductsScreen({ navigation }) {
  return (
    <View style={styles2.container}>
      <View>
        <Label>Categoria de Produtos</Label>
        <RNPickerSelect
          items={[
            { label: 'Veterinário', value: 'veterinario' },
            { label: 'Médico', value: 'medico' },
            { label: 'Psicólogo', value: 'psicologo' },
            { label: 'Segurança', value: 'seguranca' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Selecione um tipo de doação...',
            value: null,
            color: '#9EA0A4',
          }}
        />
      </View>
      <View>
        <Label>Local de doação</Label>
        <Input placeholder="Local da Doação..." placeholderTextColor="gray" />
      </View>
      <View>
        <Label>Descrição da Atividade</Label>
        <Input placeholder="Descrição da atividade..." placeholderTextColor="gray" />
      </View>
      <Meio>
        <Botao onPress={() => navigation.navigate('Home')}>
          <Confirma>Cadastrar doação</Confirma>
        </Botao>
      </Meio>
    </View>
  );
}

function InfrastructureScreen({ navigation }) {
  return (
    <View style={styles2.container}>
      <View>
        <Label>Categoria de Infraestrutura</Label>
        <RNPickerSelect
          items={[
            { label: 'Veterinário', value: 'veterinario' },
            { label: 'Médico', value: 'medico' },
            { label: 'Psicólogo', value: 'psicologo' },
            { label: 'Segurança', value: 'seguranca' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Selecione um tipo de doação...',
            value: null,
            color: '#9EA0A4',
          }}
        />
      </View>
      <View>
        <Label>Local de doação</Label>
        <Input placeholder="Local da Doação..." placeholderTextColor="gray" />
      </View>
      <View>
        <Label>Descrição da Atividade</Label>
        <Input placeholder="Descrição da atividade..." placeholderTextColor="gray" />
      </View>
      <Meio>
        <Botao onPress={() => navigation.navigate('Home')}>
          <Confirma>Cadastrar doação</Confirma>
        </Botao>
      </Meio>
    </View>
  );
}

function MonetaryScreen({ navigation }) {
  return (
    <View style={styles2.container}>
      <View>
        <Label>Categoria de Monetária</Label>
        <RNPickerSelect
          items={[
            { label: 'Veterinário', value: 'veterinario' },
            { label: 'Médico', value: 'medico' },
            { label: 'Psicólogo', value: 'psicologo' },
            { label: 'Segurança', value: 'seguranca' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Selecione um tipo de doação...',
            value: null,
            color: '#9EA0A4',
          }}
        />
      </View>
      <View>
        <Label>Local de doação</Label>
        <Input placeholder="Local da Doação..." placeholderTextColor="gray" />
      </View>
      <View>
        <Label>Descrição da Atividade</Label>
        <Input placeholder="Descrição da atividade..." placeholderTextColor="gray" />
      </View>
      <View>
        <Label>Valor da Doação</Label>
        <Input placeholder="Valor da doação..." placeholderTextColor="gray" />
      </View>
      <Meio>
        <Botao onPress={() => navigation.navigate('Home')}>
          <Confirma>Cadastrar doação</Confirma>
        </Botao>
      </Meio>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabItem, isFocused && styles.tabItemFocused]}
          >
            <Text style={[styles.tabItemText, isFocused && styles.tabItemTextFocused]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

export default function CadastroDoacao({ navigation }) {
  return (
    <Container>
      <Header>
        <Icon name='left' type='antdesign' size='25' onPress={() => navigation.goBack()} />
        <Titulo>Cadastro de Doações</Titulo>
        <View />
      </Header>
      <View style={styles.container}>
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <CustomTabBar {...props} />}>
          <Tab.Screen
            name="Services"
            options={{ tabBarLabel: 'Serviços' }}
          >
            {(props) => <ServicesScreen {...props} navigation={navigation} />}
          </Tab.Screen>
          <Tab.Screen
            name="Products"
            options={{ tabBarLabel: 'Produtos' }}
          >
            {(props) => <ProductsScreen {...props} navigation={navigation} />}
          </Tab.Screen>
          <Tab.Screen
            name="Infrastructure"
            options={{ tabBarLabel: 'Infraestrutura' }}
          >
            {(props) => <InfrastructureScreen {...props} navigation={navigation} />}
          </Tab.Screen>
          <Tab.Screen
            name="Monetary"
            options={{ tabBarLabel: 'Monetária' }}
          >
            {(props) => <MonetaryScreen {...props} navigation={navigation} />}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
      <Menu navigation={navigation} />
    </Container>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  tabBar: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    paddingLeft: 10,
    paddingRight: 40,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 18,
    backgroundColor: '#BFE0E0',
    marginHorizontal: 3,
  },
  tabItemFocused: {
    backgroundColor: '#136B69',
  },
  tabItemText: {
    fontSize: 16,
    color: '#136B69'
  },
  tabItemTextFocused: {
    color: '#ECF1FF',
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    gap: '15%',
    paddingTop: '17%'
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30,
    borderRadius: '20px',
    backgroundColor: '#BFE0E0',
    marginTop: '2%'
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    color: 'black',
    paddingRight: 30,
    borderRadius: '20px',
    backgroundColor: '#BFE0E0',
    marginTop: '2%'
  },
  placeholder: {
    color: 'gray',
  },
});