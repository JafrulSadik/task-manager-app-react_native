import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Details from './components/screens/Details';
import Home from './components/screens/Home';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "Task Manager",
            headerStyle:{
              backgroundColor: "steelblue"
            },
            headerTintColor: '#fff',
            headerTitleAlign: "center",
          }}
          name="Home" 
          component={Home} />
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{
            title: "Create",
            headerStyle:{
              backgroundColor: "steelblue"
            },
            headerTintColor: '#fff',
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
