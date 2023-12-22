import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CreateTask from './components/screens/CreateTask';
import Details from './components/screens/Details';
import Home from './components/screens/Home';
import UpdateTask from './components/screens/UpdateTask';
import TaskProvider from './context/TaskProvider';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer initialRouteName="Home">
      <TaskProvider>
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
              title: "Task1",
              headerStyle:{
                backgroundColor: "steelblue"
              },
              headerTintColor: '#fff',
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen 
            name="CreateTask" 
            component={CreateTask} 
            options={{
              title: "Create",
              headerStyle:{
                backgroundColor: "steelblue"
              },
              headerTintColor: '#fff',
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen 
            name="UpdateTask" 
            component={UpdateTask} 
            options={{
              title: "Update",
              headerStyle:{
                backgroundColor: "steelblue"
              },
              headerTintColor: '#fff',
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
        <StatusBar
          backgroundColor='#f8f8f8'
        ></StatusBar>
      </TaskProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
