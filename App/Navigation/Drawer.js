import React from 'react';
// import { Dimensions } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import DrawerContent from '../Components/Drawer';
import AlertSetSuccess from '../Screen/Home/AlertSetSuccess';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
// const NativeStack = createNativeStackNavigator();

// const DrawerStack = () => {
//     return (
//         <NativeStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <NativeStack.Screen name='AdmissionList' component={AdmissionList} />
//             <NativeStack.Screen name='StudyMeterial' component={StudyMeterial} />
//         </NativeStack.Navigator>
//     )
// }

const DrawerNav = ({navigation}) => {
  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // drawerActiveTintColor: Colors.tangerine,
        drawerInactiveTintColor: '#ffffff',
        unmountOnBlur: true,
      }}

      drawerContent={props => <DrawerContent {...props} />}
      // drawerStyle={{ width: moderateScale(280) }}
      drawerPosition="left">
        
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="AlertSetSuccess" component={AlertSetSuccess} />
     
      {/* <Drawer.Screen name="DrawerStack" component={DrawerStack} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
