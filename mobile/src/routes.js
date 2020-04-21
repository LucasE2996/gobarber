import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './pages/SignIn';

const Stack = createStackNavigator();

const DefaultOptions = {
  headerStyle: {
    backgroundColor: '#7159C1',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#FFF',
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerShown: false,
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={DefaultOptions}>
        <Stack.Screen name="Main" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
