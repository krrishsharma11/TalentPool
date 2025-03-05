import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../../utils';

const CustomHeader = ({ title, leftIcon, onLeftPress, rightIcon, onRightPress }) => {
  return (
    <>
      <StatusBar backgroundColor="#FFF"  />
      <View style={styles.container}>
        <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
          {leftIcon}
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
          {rightIcon}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    height: theme.verticalSpacing.space_100,
  paddingHorizontal:theme.horizontalSpacing.space_10
   

  },
  iconContainer: {
   width:theme.horizontalSpacing.space_26,
    height: theme.verticalSpacing.space_24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSizes.size_22,
    fontWeight: '500',
    color: '#000',
    letterSpacing:2
  },
});

export default CustomHeader;
