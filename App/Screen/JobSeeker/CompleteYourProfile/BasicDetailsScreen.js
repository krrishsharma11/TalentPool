import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../Components/reusableComponents/appHeader/customHeader';
import * as Svg from '../../../Assets/Images/svg';
import {theme} from '../../../utils';
import Stepper from './Stepper';
import CustomTextInput from '../../../Components/reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../Components/reusableComponents/button/button';
import CustomDropDownTextInput from '../../../Components/reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BasicDetailsScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const infoUrl = 'https://job-portal-candidate-be.onrender.com/basic/info';

  const PostBasicDetails = async () => {
    try {
      const response = await fetch(infoUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: name,
          dob: dob,
          gender: gender,
          mobile: mobile,
          email: email,
          locations: location,
        }),
      });
      const data = await response.json();
      await AsyncStorage.setItem('profileId', data._id);
      const profileId = await AsyncStorage.getItem('profileId');

      if (response.ok) {
        console.log('Success:', data);
        console.log('ProfileId = ', profileId);
        Alert.alert('Data Saved Sucessfully');
        navigation.navigate('EducationDetails');
      } else {
        console.log('Error:', data);
        Alert.alert('Data is already saved');
        console.log('Success:', data);
        Alert.alert('Data Saved Sucessfully');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Network Error please try again');
    }
  };

  return (
    <View style={styles.main}>
      <CustomHeader
        title={'Basic Details'}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => {
          navigation.goBack();
        }}
        rightIcon={undefined}
        onRightPress={undefined}
      />
      <Text style={styles.titleText}>Let’s Start with the Basics</Text>
      <Stepper />
      <CustomTextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder={'Full Name'}
        // style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
      />
      <CustomTextInput
        value={dob}
        onChangeText={text => setDob(text)}
        placeholder={'Date Of Birth'}
        // style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
      />
      <CustomDropDownTextInput
        value={gender}
        onChange={({value}) => setGender(value)}
        placeholder={'Gender'}
        data={[
          {label: 'Male', value: 'Male'},
          {label: 'Female', value: 'Female'},
          {label: 'Other', value: 'Other'},
        ]}
        // style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
      />
      <CustomTextInput
        value={mobile}
        onChangeText={text => setMobile(text)}
        placeholder={'Contact Number'}
        // style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
      />
      <CustomTextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder={'Email Address'}
        // style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
      />
      <CustomTextInput
        value={location}
        onChangeText={text => setLocation(text)}
        placeholder={'Location'}
        // style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
      />
      <CustomButton
        title={'Save and Continue'}
        // onPress={() => navigation.navigate('EducationDetails')}
        onPress={() => PostBasicDetails()}
        // onPress={()=>navigation.navigate(MainRoutes.RESETPASSWORD_SUCCESS)}

        style={styles.btn}
        textStyle={undefined}
      />
    </View>
  );
};

export default BasicDetailsScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  titleText: {
    fontSize: theme.fontSizes.size_18,
    color: theme.lightColor.gray,
    textAlign: 'center',
    marginTop: theme.verticalSpacing.space_12,
  },
  btn: {
    marginTop: theme.verticalSpacing.space_26,
  },
});