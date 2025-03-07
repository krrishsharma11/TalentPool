import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../../../utils'
import { String } from '../../../../utils/string'
import CustomButton from '../../../../Components/reusableComponents/button/button'

const ResetPasswordSuccessEmp = ({navigation}) => {
  return (
    <View>
      <Image source={require('../../../../Assets/Images/Vector.png')} style={styles.Img} />
      <Text style={styles.ResetText}>{String.ResetPasswordSuccess}</Text>
      <Text style={styles.ResetTextSmall}>{String.LoginWithNewPassword}</Text>
      <CustomButton 
       title={'Login'}
       onPress={() => navigation.navigate("EmployerLoginScreen")}
       style={styles.btn}
       textStyle={undefined}
      />
    </View>
  )
}

export default ResetPasswordSuccessEmp

const styles = StyleSheet.create({
    Img:{
        marginHorizontal: theme.horizontalSpacing.space_20,
        alignSelf: 'center',
        marginTop: theme.verticalSpacing.space_100,
    },
    ResetText:{
        fontSize: theme.fontSizes.size_24,
        marginHorizontal: theme.horizontalSpacing.space_2,
        alignSelf:'center',
        textAlign:'center',
        marginTop: theme.verticalSpacing.space_22,
    },
    ResetTextSmall:{
        fontSize: theme.fontSizes.size_14,
        marginHorizontal: theme.horizontalSpacing.space_2,
        alignSelf:'center',
        marginTop: theme.verticalSpacing.space_14,
        color: theme.lightColor.gray,
    },
    btn:{
        marginTop: theme.verticalSpacing.space_36,
        width: theme.horizontalSpacing.space_328,
    }
})