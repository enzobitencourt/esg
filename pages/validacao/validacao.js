import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Titulo } from "./styled";
import Menu from '../../components/menu/menu';
import CardValidacaoDoacao from '../../cards/validacaodoacao/validacaodoacao';

const { width: screenWidth } = Dimensions.get('window');

function ServicesScreen({navigation}) {
  return (
    <View style={styles2.container}>
      <CardValidacaoDoacao navigation={navigation}/>
      <CardValidacaoDoacao navigation={navigation}/>
    </View>
  );
}

function ProductsScreen({navigation}) {
  return (
    <View style={styles2.container}>
      <CardValidacaoDoacao navigation={navigation}/>
      <CardValidacaoDoacao navigation={navigation}/>
    </View>
  );
}

function InfrastructureScreen({navigation}) {
  return (
    <View style={styles2.container}>
      <CardValidacaoDoacao navigation={navigation}/>
      <CardValidacaoDoacao navigation={navigation}/>
    </View>
  );
}

function MonetaryScreen({navigation}) {
  return (
    <View style={styles2.container}>
      <CardValidacaoDoacao navigation={navigation}/>
      <CardValidacaoDoacao navigation={navigation}/>
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

export default function Validacao({ navigation }) {
  return (
    <Container>
      <Header>
        <Titulo>Todas as doações</Titulo>
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
      <Menu numero='5' navigation={navigation} />
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
    alignItems: 'stretch'
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
