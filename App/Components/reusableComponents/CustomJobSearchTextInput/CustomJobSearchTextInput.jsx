import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../customTextInput/customTextInput'
import CustomDropDownTextInput from '../customDropDownTextInput/CustomDropDownTextInput'
import * as Svg from '../../../Assets/Images/svg';
const CustomJobSearchTextInput = ({rightIcon = undefined, onRightIconPress = undefined}) => {
  return (
    <>
      <View style={styles.SearchBarContainer}>
        <View style={styles.DropDownCountrySelect}>
        <CustomDropDownTextInput
         value={undefined}
         onChange={undefined}
         placeholder={'India'}
         data={[
           {label: 'india', value: 'india'},
           {label: 'uk', value: 'uk'},
           {label: 'usa', value: 'usa'},
           {label: 'france', value: 'france'},
           {label: 'china', value: 'china'},
           {label: 'nepal', value: 'nepal'},
         ]}/>
        </View>
        <View style={styles.TextInput}>
        <CustomTextInput
         value={undefined}
         onChangeText={undefined}
         placeholder={'Job title,keywords,company..'}
         // style={styles.Input}
         inputStyle={undefined}
         leftIcon={<Svg.SearchIcon color='#6a1b9a'/>}
         onLeftIconPress={undefined}
         rightIcon={rightIcon}
         onRightIconPress={onRightIconPress}/>
        </View>
      </View>
    </>
  )
}

export default CustomJobSearchTextInput

const styles = StyleSheet.create({
    SearchBarContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
      },
      DropDownCountrySelect:{
        width:125,
      },
      TextInput:{
        width:245,
      },
})