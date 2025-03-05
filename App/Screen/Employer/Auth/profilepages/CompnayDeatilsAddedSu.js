import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Svg from '../../../../Assets/Images/svg';

const { width, height } = Dimensions.get('window');

const CompanyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Profile Completed Successfully Text */}
      <Text style={styles.profileCompletedText}>Profile Completed Successfully</Text>

      {/* You're all set Text */}
      <Text style={styles.youreAllSetText}>You're all set to start hiring and managing your team effectively.</Text>

      {/* Image */}
      <Image source={require('../../../../Assets/Images/Successfully.png')} style={styles.image} />

      {/* Post A Job Button */}
      
      <TouchableOpacity style={[styles.button, styles.postJobButton]} onPress={() => navigation.navigate('JobPostScreen')}>
        <Text style={styles.postJobButtonText}>Post A Job</Text>
        <Svg.ArrowNext size={14} color= {'#FFFFFF'}/>
      </TouchableOpacity>
     

      {/* View Dashboard Button */}
      <TouchableOpacity style={[styles.button, styles.viewDashboardButton]}>
      <Svg.ArrowBack size={24} color= {'rgba(121, 0, 186, 1)'}/>
        <Text style={styles.viewDashboardButtonText} onPress={() => navigation.navigate('DashBoardEmp')}>View Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  profileCompletedText: {
    position: 'absolute',
    width: 360,
    height: 76,
    top: 164,
    left: 18,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000', 
  },
  youreAllSetText: {
    position: 'absolute',
    width: 360,
    height: 42,
    top: 220,
    left: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#000000', 
  },
  image: {
    position: 'absolute',
    width: 201,
    height: 246,
    top: 300,
    left: (width - 201) / 2,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    justifyContent:'center',
    left: '10%', 
    flexDirection:'row'
  },
  postJobButton: {
    backgroundColor: 'rgba(121, 0, 186, 1)', 
    top: height - 200, 
  },
  postJobButtonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:12,
  },
  viewDashboardButton: {
    backgroundColor: 'transparent', 
    borderWidth: 2,
    borderColor: 'rgba(121, 0, 186, 1)', 
    top: height - 190, 
  },
  viewDashboardButtonText: {
    color: 'rgba(121, 0, 186, 1)', 
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:12
  },
});

export default CompanyProfile;