import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './App/Services/Navigation';
import AppStack from './App/Navigation/AppStack';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './App/Screen/Inbox/Chat';
import SelectorScreen from './App/Screen/JobSeeker/SelectorScreen';
import EmployerStack from './App/Navigation/EmployerStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <Theme.Provider
        theme={{
          light: {
            primaryThemeColor: '#000000',
            secondaryThemeColor: '#FFFFFF',
            primaryFontColor: '#191A19',
            secondaryFontColor: 'rgba(41, 41, 41, 0.8)',
            cardColor: '#FFFFFF',
            headerColor: '#fff',
            // pageBackgroundColor: '#F3EEF0',
            pageBackgroundColor: '#ffffff',
            tabBarColor: '#F3EEEF',
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: '#000000',
            borderColor: 'rgba(41, 41, 41, 0.39)'
          },
          dark: {
            primaryThemeColor: '#000000',
            secondaryThemeColor: '#FFFFFF',
            primaryFontColor: '#191A19',
            secondaryFontColor: 'rgba(41, 41, 41, 0.8)',
            cardColor: '#FFFFFF',
            headerColor: '#fff',
            // pageBackgroundColor: '#F3EEF0',
            pageBackgroundColor: '#ffffff',
            tabBarColor: '#F3EEEF',
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: '#000000',
            borderColor: 'rgba(41, 41, 41, 0.39)',
          },
        }}
        mode={colorScheme=='dark' ? 'dark' : 'light'}
      > */}

      <NavigationContainer ref={r => NavigationService.setTopLevelNavigator(r)}>
        <Stack.Navigator
          // initialRouteName="AuthStack"
          screenOptions={{
            headerShown: false,
            // gestureEnabled: true,
            // gestureDirection: 'horizontal',
          }}>
          {/* {
              !login_status ?
                <Stack.Screen name="AuthStack" component={AuthStack} />
                :
                <Stack.Screen name="AppStack" component={AppStack} />
            } */}

          {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
          {/* <Stack.Screen name="Chat" component={Chat} /> */}
           <Stack.Screen name="SelectScreen" component={SelectorScreen} />
           <Stack.Screen name="EmployerStack" component={EmployerStack} />
           

          <Stack.Screen name="AppStack" component={AppStack} />

        </Stack.Navigator>
      </NavigationContainer>
      {/* </Theme.Provider> */}
    </View>
  );
}

const styles = StyleSheet.create({});
