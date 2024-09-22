import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from "../pages/login";
import { MenuScreen } from "../pages/menu";
import {Gerenciamento_maquinas} from "../pages/gerenciamentoMaquinas"
import {solicitacoes} from "../pages/solicitacoes"
import {registros} from "../pages/registros"
import {relatorio} from "../pages/relatorio"
import { relatorioMenu } from "../pages/relatorioMenu";
import {gerenciamentoEquipe} from "../pages/gerenciamentoEquipe"
import { MaquinaDetalhes } from "../pages/maquinaDetalhes";
import { RelatorioDesempenho } from "../pages/relatorioDesempenho";
import { RelatorioEstoque } from "../pages/RelatorioEstoque";
import { RegistroMenu } from "../pages/RegistroMenu";
import { CadastroMaquina } from "../pages/CadastroMaquina";
import { CadastroManutencao } from "../pages/CadastroManutencao";
import { CadastroPecas } from "../pages/CadastroPecas";
import { Manutencao } from "../pages/Manutencao";


type RootStackParamList = {
  Home: undefined;
  Details: {name: string; email: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login" component={LoginScreen}   options={{ headerShown: false }} />
        <Stack.Screen  name="menu" component={MenuScreen}  options={{ headerShown: false }} />
        <Stack.Screen  name="gerenciamentoMAquinas" component={Gerenciamento_maquinas}  options={{ headerShown: false }} />
        <Stack.Screen  name="solicitacoes" component={solicitacoes}  options={{ headerShown: false }} />
        <Stack.Screen  name="registros" component={registros}  options={{ headerShown: false }} />
        <Stack.Screen  name="relatorio" component={relatorio}  options={{ headerShown: false }} />
        <Stack.Screen  name="relatorioMenu" component={relatorioMenu}  options={{ headerShown: false }} />
        <Stack.Screen  name="gerenciamentoEquipe" component={gerenciamentoEquipe}  options={{ headerShown: false }} />
        <Stack.Screen name="MaquinaDetalhes" component={MaquinaDetalhes} options={{ headerShown: false }}/>
        <Stack.Screen name="RelatorioDesempenho" component={RelatorioDesempenho} options={{ headerShown: false }}/>
        <Stack.Screen name="RelatorioEstoque" component={RelatorioEstoque} options={{ headerShown: false }}/>
        <Stack.Screen name="RegistroMenu" component={RegistroMenu} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroMaquina" component={CadastroMaquina} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroManutencao" component={CadastroManutencao} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroPecas" component={CadastroPecas} options={{ headerShown: false }}/>
        <Stack.Screen name="Manutencao" component={Manutencao} options={{ headerShown: false }}/>


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
