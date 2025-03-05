import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { String, theme } from '../../../utils'
import Stepper from './Stepper'
import CustomButton from '../../../Components/reusableComponents/button/button'


const YouAreAllSetScreen = ({navigation}) => {
  return (
    <View style={styles.main}> 
      <Text style={styles.Title}>You're All Set,</Text>
      <Text style={styles.SubTitle}>{String.welcomeToTechnoCrate}</Text>
      <Stepper/>
      <Image style={styles.imgStyle} source={require('../../../Assets/Images/YouAreAllSet.png')} />
      <Text style={styles.SubText}>{String.YouAreAllSetSubTitle}</Text>
      <CustomButton
      title={'Browse Jobs'}
      onPress={() => navigation.navigate('BrowseJobs')}
      style={styles.btn}
      textStyle={undefined}
    />
    <CustomButton
      title={'My Profile'}
      backgroundColor = {'#ffffff'}
  textColor = {'#6A0DAD'}
      onPress={() => navigation.navigate('DrawerNav')}
      style={styles.btnsecond}
      textStyle={undefined}
    />
    </View>
  )
}

export default YouAreAllSetScreen

const styles = StyleSheet.create({
    Title:{
        textAlign:'center',
        fontSize: theme.fontSizes.size_24,
        fontWeight: '500' ,
        marginTop:theme.verticalSpacing.space_100
    },
    SubTitle:{
        textAlign:'center',
        fontSize: theme.fontSizes.size_24,
        fontWeight:'500',
        marginTop:theme.verticalSpacing.space_20
    },
    main:{
        padding:10,
        backgroundColor:'white',
        flex: 1,
    },
    imgStyle:{
        width:theme.horizontalSpacing.space_230,
        marginTop:theme.verticalSpacing.space_50,
        alignSelf:'center'
    },
    SubText:{
        fontSize: theme.fontSizes.size_16,
        textAlign:'center',
        marginHorizontal: theme.horizontalSpacing.space_28,
        marginTop: theme.verticalSpacing.space_18,
        color: theme.lightColor.gray,
    },
    btn:{
      marginTop: theme.verticalSpacing.space_18
    },
    btnsecond:{
      marginTop: theme.verticalSpacing.space_18,
      borderWidth:2,
      borderColor: theme.lightColor.purple
    }
})