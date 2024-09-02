import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Titulo, Texto } from "./styled";
import Menu from '../../components/menu/menu';

const { width: screenWidth } = Dimensions.get('window');

function Screen({route}) {
  const {text} = route.params

  return (
    <View style={styles2.container}>
      <Texto>{text}</Texto>
    </View>
  );
}

function ImpactoScreen() {
  return (
    <View style={styles2.container}>
      <Texto>As ações corporativas no pós-enchentes têm um impacto significativo na recuperação das comunidades afetadas. Empresas que contribuem com recursos financeiros, apoio logístico e voluntariado desempenham um papel vital na recuperação rápida e eficaz das áreas devastadas. Além disso, essas ações reforçam a confiança da comunidade nas empresas, fortalecendo os laços e promovendo um desenvolvimento mais sustentável e resiliente. </Texto>
      <Texto>Estamos empenhados em continuar desenvolvendo soluções que ajudem a sociedade a enfrentar e superar desafios como as enchentes, reconhecendo e incentivando as empresas a serem agentes de mudança positiva em momentos de necessidade.</Texto>
      <Texto>Junte-se a nós nesta jornada de responsabilidade social e sustentabilidade!</Texto>
    </View>
  );
}

function AcoesScreen() {
  return (
    <View style={styles2.container}>
      <Texto>Nosso aplicativo surge como uma iniciativa importante para reconhecer e certificar empresas que demonstram responsabilidade social em momentos de crise, especialmente em resposta às enchentes devastadoras que assolaram o estado do Rio Grande do Sul em maio de 2024. O desenvolvimento deste aplicativo é fruto de uma pesquisa científica rigorosa conduzida pelo grupo de iniciação científica da Unisinos. Essa pesquisa é fundamental para garantir que nosso sistema de certificação e pontuação seja preciso, justo e eficaz.</Texto>
      <Texto>Muitas empresas, ao verem suas comunidades em necessidade, realizam doações e contribuições essenciais para a reconstrução e apoio às vítimas. Tais ações incluem desde a doação de suprimentos básicos, como alimentos e roupas, até investimentos em infraestrutura para prevenir futuras enchentes. Nosso trabalho científico nos permite identificar e valorizar essas ações de maneira criteriosa, incentivando um comportamento socialmente responsável e sustentável.</Texto>
      <Texto>A pesquisa científica que embasa nosso aplicativo não apenas melhora a precisão do reconhecimento das ações corporativas, mas também fortalece o compromisso das empresas com práticas ESG. Este é um exemplo claro de como a ciência e a academia podem se unir para promover um impacto positivo tangível na sociedade.</Texto>
    </View>
  );
}

function MetodologiaScreen() {
  return (
    <View style={styles2.container}>
      <Texto>Nos últimos anos, o conceito ESG (ambiental, social e Governança) tem ganhado destaque no mundo dos negócios como um guia essencial para a sustentabilidade e a responsabilidade corporativa. O ESG representa a integração de preocupações ambientais, sociais e de governança nas operações e estratégias das empresas, com o objetivo de criar valor a longo prazo para todas as partes interessadas. </Texto>
      <Texto>Dentro do framework ESG, a dimensão social, representada pela letra “S”, desempenha papel crucial. Essa dimensão aborda ampla gama de questões sociais, incluindo a equidade, diversidade, inclusão, direitos humanos, saúde e segurança de trabalhadores, relações com a comunidade e impacto social.</Texto>
      <Texto>Os critérios de atividades sociais variam de acordo com a natureza e o escopo das operações de cada Empresa, mas, geralmente, incluem políticas e práticas relacionadas à diversidade e inclusão no local de trabalho, programas de responsabilidade social corporativa (RSC), investimento na comunidade e respeito aos direitos humanos em toda a cadeia de suprimentos, entre outros.</Texto>
      <Texto>A coleta de dados relacionadas às atividades “S” envolve a obtenção de informações sobre as políticas, programas e práticas sociais das Empresas. Isso pode incluir dados sobre a composição demográfica da força de trabalho, iniciativas de voluntariado, doações para organizações sem fins lucrativos, entre outros. A análise desses dados visa avaliar o desempenho social da empresa e identificar áreas de melhoria.</Texto>
      <Texto>Os indicadores de desempenho social são métricos utilizados para monitorar e avaliar o progresso das Empresas em relação aos seus objetivos sociais. Isso pode incluir taxas de diversidade no local de trabalho, índices de satisfação dos funcionários, impacto dos programas de RSC na comunidade, entre outros. O impacto social refere-se aos efeitos tangíveis e intangíveis das atividades sociais das Empresas na Sociedade, como melhoria da qualidade de vida, redução da desigualdade e fortalecimento das comunidades locais. </Texto>
      <Texto>Os critérios “S” são fundamentais para a construção de Empresas sustentáveis e socialmente responsáveis. Ao adotar práticas sociais sólidas e transparentes, as Empresas podem não apenas melhorar sua reputação e mitigar riscos, mas contribuir para um mundo mais justo, inclusivo e resiliente. </Texto>
      <Texto>No contexto da calamidade do Rio Grande do Sul, as Empresas desempenham papel crucial não apenas na recuperação e reconstrução das áreas afetadas, como na mitigação dos impactos sociais causados pela crise. Nesse cenário, os critérios “S” adotados para a certificação das Empresas ganha relevância ainda maior, refletindo não apenas as práticas sociais em condições normais, mas, suas ações e engajamento durante períodos de crie e emergência. </Texto>
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

export default function SobreNos({navigation}) {
  return (
    <Container>
      <Header>
        <Titulo>Sobre Nós</Titulo>
      </Header>
        <View style={styles.container}>
          <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen name="Sobre" component={Screen} options={{ tabBarLabel: 'Quem somos?' }} initialParams={{ text: 'Nosso aplicativo foi desenvolvido através do grupo de iniciação científica da Universidade do Vale do Rio dos Sinos (Unisinos), sob a coordenação da Professora Dra. Daniela Pellin. O projeto contou com a colaboração dedicada de alunos engajados: Alana Bortolini, Anelise Costa, Carla Susin, Enzo Bitencourt, Julia da Rosa, Laura Rossi Rimolo, Luciani Colares Lopes, Luna Tesser, Maria Antonia Garcia Kellermann e Valentina Huyer. ' }}  />
            <Tab.Screen name="Missão" component={Screen} options={{ tabBarLabel: 'Nossa Missão' }} initialParams={{ text: 'Nosso principal objetivo é certificar empresas que realizam doações e contribuições sociais, estabelecendo um sistema de pontuação baseado nos critérios de ESG (Environmental, Social, and Governance). Através desta iniciativa, buscamos promover práticas empresariais responsáveis e sustentáveis. O reconhecimento dessas ações não só recompensa as iniciativas positivas, mas também incentiva outras empresas a seguirem o mesmo caminho, criando uma cultura de solidariedade e apoio mútuo.'}} />
            <Tab.Screen name="Importância" component={Screen} options={{ tabBarLabel: 'Por que isso importa?' }} initialParams={{ text: 'É fundamental reconhecer e valorizar as empresas que se engajam em práticas de responsabilidade social. A implementação de um sistema de pontuação baseado em critérios de ESG ajuda a destacar aquelas empresas que, além de serem socialmente responsáveis, estão comprometidas com a sustentabilidade ambiental e a governança ética. Ao certificar e pontuar as empresas que se destacam em suas contribuições sociais e ambientais, nosso aplicativo não apenas reconhece essas ações, mas também promove um ambiente onde a responsabilidade social é valorizada e incentivada.' }} />
            <Tab.Screen name="Ações" component={AcoesScreen} options={{ tabBarLabel: 'Nossas Ações' }} />
            <Tab.Screen name="Compromisso" component={Screen} options={{ tabBarLabel: 'Nosso Compromisso' }} initialParams={{ text: 'Este projeto reflete o compromisso inabalável da Unisinos em promover a inovação e a responsabilidade social. Ao unir esforços acadêmicos e empresariais, buscamos gerar um impacto positivo tangível na comunidade e no ambiente. Acreditamos que, ao fomentar atitudes que beneficiem a sociedade e o meio ambiente, podemos contribuir significativamente para um futuro mais justo e equilibrado.' }} />
            <Tab.Screen name="Impacto" component={ImpactoScreen} options={{ tabBarLabel: 'Impacto na Comunidade' }}/>
            <Tab.Screen name="Metodologia" component={MetodologiaScreen} options={{ tabBarLabel: 'Metodologia' }} />
          </Tab.Navigator>
        </View>
      <Menu navigation={navigation} numero='3'/>
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