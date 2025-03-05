import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Svg from '../../../Assets/Images/svg';
import { theme } from '../../../utils';

const SocialLoginButtons = ({ onFacebookPress, onGooglePress, onLinkedInPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onFacebookPress}>
        <Svg.FaceBook/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={onGooglePress}>
        <Svg.GoogleIcon/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onLinkedInPress}>
       <Svg.LinkDin/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:theme.verticalSpacing.space_30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    borderWidth:0.3,
    borderColor:theme.lightColor.purple,
    borderRadius: 8,
    padding: 10,
    width:theme.horizontalSpacing.space_100,
    height:theme.verticalSpacing.space_58,
    alignItems:"center",
    justifyContent:"center",
    margin:5
  },
  icon: {
    width:theme.horizontalSpacing.space_28,
    height:theme.verticalSpacing.space_28,
  },
});

export default SocialLoginButtons;
