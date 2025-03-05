import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Login from '../Screen/Auth/Login';


// import UploadPhoto from '../Screens/UploadPhoto';


const Stack = createStackNavigator();
// create a component
const AuthStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            {/* <Stack.Screen name="Login" component={Login} /> */}
            {/* <Stack.Screen name="UploadPhoto" component={UploadPhoto} /> */}
          
        </Stack.Navigator>
    );
};

export default AuthStack;
