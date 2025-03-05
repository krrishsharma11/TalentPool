import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import CustomButton from '../../../Components/reusableComponents/button/button';
import { theme } from '../../../utils';
// import * as Svg from '../../../assets/images/svg';
import * as Svg from '../../../Assets/Images/svg'

const EditAboutScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
              <View style={styles.container}>
        
                {/* Profile Image */}
                <Text style={styles.heading}>About</Text>

                <View style={styles.textBox}>
                <View style={styles.text}>
                <Text>UI/UX Designer with a passion for crafting intuitive and user-centered designs that enhance overall user experiences. 
                </Text>
            </View>
            </View>
            <View style={styles.buttonContainer}>
            <CustomButton title="Save" backgroundColor="#6A0DAD" style={styles.saveButton} onPress={()=>navigation.navigate("MyProfile")}/>
            </View>
            </View>
<TouchableOpacity style={styles.closeButton} onPress={()=>navigation.navigate("MyProfile")}>
            <Svg.CrossIcon size={48}/>
          </TouchableOpacity>
            
                </View>
    )
}

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
        marginRight:240,
        fontWeight: 'bold',
        marginBottom: theme.verticalSpacing.space_16,
      },
      text:{
        marginLeft:20,
        marginTop:10,
        marginBottom:40,
      },
      textBox: {
        borderWidth: 1,          
        borderRadius: 12,   
        borderColor:'gray',      
        padding: 12,             
        backgroundColor: 'white', 
        width: '100%',           
    },
    closeButton: {
        position: "absolute",
        top: 220, 
        right: 8, 
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
      buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        gap: theme.horizontalSpacing.space_16,
        marginBottom: theme.verticalSpacing.space_16,
      },
      
      saveButton: {
        width: 120,
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
      },
})

export default EditAboutScreen;