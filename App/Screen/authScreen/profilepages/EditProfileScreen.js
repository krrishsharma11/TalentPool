import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
// import CustomButton from '../../../reusableComponents/button/button';
import CustomButton from '../../../Components/reusableComponents/button/button';
import { theme } from '../../../utils';
import * as Svg from '../../../Assets/Images/svg';



const EditProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>

        {/* Profile Image */}
        <Text style={styles.heading}>Profile Photo</Text>
         <Image
                    style={styles.profileImage}
                    source={require('../../../Assets/Images/person.jpg')}
                  />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <CustomButton title="Delete" backgroundColor="#6A0DAD" style={styles.deleteButton} />
          <CustomButton title="Change" backgroundColor="#6A0DAD" style={styles.changeButton}/>
        </View>

        {/* Supported Formats */}
        <Text style={styles.supportedText}>
          Supported file format: png, jpg, jpeg, gif - upto 2MB
        </Text>

        {/* Terms of Service */}
        <Text style={styles.termsText}>
          By uploading your photograph, you certify that Naukri.com has the right to display this
          photograph to the recruiters and that the uploaded file does not violate our{' '}
          <Text style={styles.termsLink}>Terms of Services</Text>.
        </Text>
        <View style={styles.underline} />
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={()=>navigation.navigate('MyProfile')}>
            <Svg.CrossIcon size={48}/>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#F5F5F5',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: theme.verticalSpacing.space_24,
    alignItems: 'center',
    width: 340,
    elevation: 4,
  },
  heading: {
    fontSize: theme.fontSizes.size_18,
    fontWeight: 'bold',
    marginBottom: theme.verticalSpacing.space_16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: theme.verticalSpacing.space_16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    gap: theme.horizontalSpacing.space_16,
    marginBottom: theme.verticalSpacing.space_16,
  },
  
  deleteButton: {
    width: 120,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  changeButton: {
    width: 120,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  supportedText: {
    fontSize: theme.fontSizes.size_12,
    color: '#6A6A6A',
    marginBottom: theme.verticalSpacing.space_12,
  },
  termsText: {
    fontSize: theme.fontSizes.size_12,
    textAlign: 'center',
    color: '#6A6A6A',
  },
  underline: {
    width: 100, 
    height: 1,  
    backgroundColor: '#6A6A6A',
    marginLeft: 20,
  },
  closeButton: {
    position: "absolute",
    top: 210, 
    right: 10, 
    width: 40, 
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
    borderRadius: 20, 
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default EditProfileScreen;
