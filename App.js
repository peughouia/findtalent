import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/Candidate/Screen/Home';
import Connexion from './App/Auth/Connexion';
import Register from './App/Auth/Register';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Connexion">
          <Stack.Screen component={HomeScreen} name="Home" 
                  options={{ headerShown:false }}/>

          <Stack.Screen component={Connexion}  name= "Connexion"
                  options={{ headerShown:false }}/>

          <Stack.Screen component={Register} name = "Register"
                  options={{ headerShown:false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


