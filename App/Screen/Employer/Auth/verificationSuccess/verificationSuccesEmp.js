import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../../../Components/reusableComponents/button/button';
import * as Svg from '../../../../Assets/Images/svg';
import { theme } from '../../../../utils';

const VerificationSuccessScreenErp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Svg.Success />
      <Text style={styles.title}>Verification Successful!</Text>
      <Text style={styles.subtitle}>Your verification is successful. You’re all set to explore and apply for your dream job.</Text>
      <CustomButton
        style={{ marginTop: 30 }}
        title={'Login'}
        onPress={() => navigation.navigate('EmployerLoginScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: theme.fontSizes.size_24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10
  },
  subtitle: {
    fontSize: theme.fontSizes.size_14,
    color: theme.lightColor.gray,
    textAlign: 'center',
    marginBottom: 30,
  }
});

export default VerificationSuccessScreenErp;
