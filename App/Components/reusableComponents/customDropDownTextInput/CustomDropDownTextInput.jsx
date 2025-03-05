import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { theme } from '../../../utils';

const CustomDropDownTextInput = ({
    value,
    onChange,
    placeholder,
    style,
    data,
    search = false,
    inputStyle,

  }) => {
  return (
    <View style={[styles.container, style]}>
        <Dropdown
        style={[styles.input , inputStyle]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemContainerStyle={styles.itemcontainer}
        iconStyle={styles.iconStyle}
        data={data}
        search = {search}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onChange={onChange}

      />
    </View>
  )
}

export default CustomDropDownTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#F7F8F9',
        borderRadius:10,
        borderWidth:0.3,
        borderColor: theme.lightColor.gray,
        paddingHorizontal: theme.horizontalSpacing.space_12,
        height: theme.verticalSpacing.space_56,
        marginTop:theme.verticalSpacing.space_10
      },
      input: {
        flex: 1,
        fontSize: theme .fontSizes.size_14,
        color: theme.darkModeColor.blackColor,
        paddingHorizontal: theme.horizontalSpacing.space_8,
      },
      itemcontainer:{
        borderRadius: theme.boderRadius.large_10,
      },
      placeholderStyle:{
        color: theme.lightColor.gray,
      }
})