import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoardEmp from '../Screen/Employer/DashBoradEmp/DashBoradEmp';
import DrawerContentEmp from './EmployerContentnav';



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

const DrawerNavEmp = ({navigation}) => {
  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // drawerActiveTintColor: Colors.tangerine,
        drawerInactiveTintColor: '#ffffff',
        unmountOnBlur: true,
      }}

      drawerContent={props => <DrawerContentEmp {...props} />}
      // drawerStyle={{ width: moderateScale(280) }}
      drawerPosition="left">
    
     
      {/* <Drawer.Screen name="DrawerStack" component={DrawerStack} /> */}
      {/* ----------------Drawer content mai jo dena hai vo yaha lgna hai------------- */}
      <Drawer.Screen name="DashBordEmployer" component={DashBoardEmp} />

    </Drawer.Navigator>
  );
};

export default DrawerNavEmp;
