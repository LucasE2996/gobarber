import 'react-native-gesture-handler';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();

const DefaultOptions = {
  headerShown: false,
};

const ShowHeaderOptions = {
  headerStyle: {
    backgroundColor: '#ad5389',
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerTintColor: '#FFF',
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const TabNavigatorOptions = {
  screenOptions: ({route}) => ({
    tabBarIcon: ({focused, size, color}) => {
      let iconName;

      if (route.name === 'Dashboard') {
        iconName = 'event';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (route.name === 'New') {
        iconName = 'add';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
  }),
  tabBarOptions: {
    showLabel: false,
    keyboardHidesTabBar: true,
    activeTintColor: '#fff',
    inactiveTintColor: 'rgba(255,255,255,0.5)',
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

function New() {
  return (
    <Stack.Navigator
      initialRouteName="SelectProvider"
      screenOptions={ShowHeaderOptions}>
      <Stack.Screen name="SelectProvider" component={SelectProvider} />
      <Stack.Screen name="SelectDateTime" component={SelectDateTime} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}

const Routes = () => {
  const isSingnedIn = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      {isSingnedIn ? (
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={TabNavigatorOptions.screenOptions}
          tabBarOptions={TabNavigatorOptions.tabBarOptions}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen
            name="New"
            component={New}
            options={{unmountOnBlur: true}}
          />
          <Tab.Screen name="Profile" component={Profile} />
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
