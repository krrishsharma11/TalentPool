import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import * as Svg from '../../../Assets/Images/svg';
import { theme } from '../../../utils';


const CustomBrowseJobHeader = ({profileuri,messageIconOnpress, BellIconOnpress}) => {
  return (
    <>
      <View style={styles.HeaderContainer}>
        <Image style={styles.ImageLogo} source={require('../../../Assets/Images/technoKrate1.png')}/>
        <View style={styles.IconContainer} >
        <TouchableOpacity onPress={messageIconOnpress}>
            <Svg.MessageIcon color='#000'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={BellIconOnpress}>
            <Svg.SimpleBellIcon color='#000'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image height={36} width={36} style={styles.IconImage} source={profileuri}  />
        </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default CustomBrowseJobHeader

const styles = StyleSheet.create({ ImageLogo:{
    width: 130,
    height: 50
},
HeaderContainer:{
    marginVertical: theme.verticalSpacing.space_14,
    marginHorizontal: theme.horizontalSpacing.space_10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
},
IconContainer:{
  flexDirection:'row',
  alignItems:'center',
  gap: theme.horizontalSpacing.space_10

},
IconImage:{
  height:theme.fontSizes.size_40,
  width:theme.fontSizes.size_40,
  borderRadius: theme.boderRadius.xxxXlarge_25,
  borderWidth:2,
  borderColor:theme.lightColor.purple,
},
})