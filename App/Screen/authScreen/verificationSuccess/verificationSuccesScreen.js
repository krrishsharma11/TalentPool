import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../../../Components/reusableComponents/button/button';
import * as Svg from '../../../Assets/Images/svg';
import {theme} from '../../../utils'


const VerificationSuccessScreen =({ route,navigation
   })=>{

  const { type } = route.params;  // Access type from route.params

  console.log('Type:', type);

  const message =
    type === 'email'
      ? 'Your email has been successfully verified. You’re all set to explore and apply for your dream job.'
      : 'Your phone has been successfully verified. You’re all set to explore and apply for your dream job.';
  

  return (
    <View style={styles.container}>
       <Svg.Success/>
      <Text style={styles.title}>Verification Successful!</Text>
      <Text style={styles.subtitle}>{message}</Text>
     <CustomButton
     style={{marginTop:30}}
     title={'Login'}
     onPress={()=>navigation.navigate('Login')}
     />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize:theme.fontSizes.size_24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    marginTop:10
  },
  subtitle: {
    fontSize:theme.fontSizes.size_14,
    color:theme.lightColor.gray,
    textAlign: 'center',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop:40
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationSuccessScreen;
