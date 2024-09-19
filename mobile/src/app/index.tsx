import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from "../pages/login";
import { MenuScreen } from "../pages/menu";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
