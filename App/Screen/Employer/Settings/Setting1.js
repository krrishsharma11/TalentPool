import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Setting1 = ({ navigation }) => {
  const settingsOptions = [
    { label: 'App Preferences', icon: 'settings', screen: 'AppPreferences' },
    { label: 'Notification', icon: 'notifications', screen: 'NotiificationSetting' },
    { label: 'Sign In & Security', icon: 'lock', screen: 'PasswordChangeSetting' },
    { label: 'Help & Support', icon: 'help' },
    { label: 'Billing & Payments', icon: 'credit-card' },
    { label: 'User Terms & Conditions', icon: 'description' },
    { label: 'Switch Account', icon: 'swap-horiz' },
    { label: 'Sign Out', icon: 'exit-to-app' },
    
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.topCard}>
        <Image
          source={require('../../../Assets/Icons/Info1.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.topCardText}>
          <Text style={styles.title}>Infosys Limited</Text>
          <Text style={styles.subtitle}>Information Technology</Text>
          <Text style={styles.subtitle1}>Bangalore</Text>
        </View>
      </View>

      <View style={styles.spacer} />

      {settingsOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionCard} onPress={() => navigation.navigate(option.screen)}>
          <View style={styles.optionCardContent}>
            <Icon name={option.icon} type="material" size={25} color="purple" style={styles.icon} />
            <Text style={styles.optionText}>{option.label}</Text>
            <Icon name="chevron-right" type="material" size={25} color="grey" />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F7F8F9', 
    paddingVertical: 20 
  },
  header: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginHorizontal: 16, 
    marginBottom: 15, 
    color: '#18191C', 
    textAlign: 'center', 
    marginTop: 35 
  },
  topCard: { 
    backgroundColor: "#F7F8F9", 
    borderRadius: 10, 
    marginHorizontal: 16, 
    padding: 16, 
    flexDirection: 'row', 
    alignItems: 'center', 
    height: 100, 
    borderColor: '#D3D3D39C', 
    borderWidth: 2 
  },
  image: { 
    width: 80, 
    height: 80, 
    borderRadius: 60, 
    backgroundColor: '#92C0FF', 
    overflow: 'hidden' 
  },
  topCardText: { 
    marginLeft: 16 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#666666' 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#666666' 
  },
  subtitle1: { 
    color: '#666666' 
  },
  spacer: { 
    height: 40 
  },
  optionCard: { 
    backgroundColor: "#F7F8F9", 
    borderRadius: 8, 
    marginHorizontal: 16, 
    marginBottom: 10, 
    padding: 15, 
    borderColor: '#D3D3D39C', 
    borderWidth: 2 
  },
  optionCardContent: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  icon: { 
    marginRight: 16 
  },
  optionText: { 
    fontSize: 16, 
    color: '#8391A1', 
    flex: 1 
  },
});

export default Setting1;
