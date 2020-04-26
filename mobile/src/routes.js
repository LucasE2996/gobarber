import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import User from '~/pages/User';

const Stack = createStackNavigator();

const DefaultOptions = {
  headerShown: false,
};

const TabNavigatorOptions = {
  screenOptions: ({route}) => ({
    tabBarIcon: ({focused, size, color}) => {
      let iconName;

      if (route.name === 'Dashboard') {
        iconName = 'event';
      } else if (route.name === 'User') {
        iconName = focused ? 'person' : 'person-outline';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
  }),
  tabBarOptions: {
    showLabel: false,
    keyboardHidesTabBar: true,
    activeTintColor: '#fff',
    inactiveTintColor: '#666',
    style: {
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      elevation: 0,
    },
  },
};

const Tab = createBottomTabNavigator();

const Routes = (isSingnedIn = false) => {
  return (
    <NavigationContainer>
      {isSingnedIn ? (
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={TabNavigatorOptions.screenOptions}
          tabBarOptions={TabNavigatorOptions.tabBarOptions}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={DefaultOptions}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
