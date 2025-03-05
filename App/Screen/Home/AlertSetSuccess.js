import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // For icons
import {CommonStyles} from '../../Constants/Styles';
import {COLORS} from '../../Constants/Colors';

const AlertSetSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        // backgroundColor="black"
        barStyle="dark-content"
      />

      <Image
        style={{height: 84, width: 89}}
        source={require('../../Assets/Icons/CheckCircle.png')}
      />

      <Text style={styles.title}>Job Alert Set Successfully</Text>

      <Text style={styles.subtitle}>
        You’ll receive notifications whenever a new job matching your
        preferences is posted
      </Text>
      <View style={{marginTop: 40, width: '100%'}}>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" size={22} color="white" />
          <Text style={CommonStyles.buttonText}> Go to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: '#6A1B9A', // Purple Background
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: COLORS.boldText2,
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.lightText2,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6A1B9A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
});

export default AlertSetSuccess;
