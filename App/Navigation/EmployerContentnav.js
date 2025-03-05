import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  Alert,
  Linking,
} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import { COLORS } from '../../Screens/Constant/Colors';
import NavigationService from '../Services/Navigation';
import {moderateScale} from '../Constants/PixelRatio';
import {COLORS} from '../Constants/Colors';
// import { DrawerContentScrollView, DrawerItem, DrawerNavigationProp } from '@react-navigation/drawer';
// import { useNavigation } from '@react-navigation/native';
// create a component
const DrawerContentEmp = props => {
  const [currInd, setCurrInd] = useState(0);
  const [username, setUsername] = useState('Guest'); // Default to Guest
  useEffect(() => {
    // Fetch username from AsyncStorage
    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.log('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);
  // const theme = useTheme();
  // const NavigationService = useNavigation();

  // useEffect(() => {
  //     console.log('drawer props navigation....', props.navigation);
  // }, []);

  // const onConfirmLogout = () => {
  //     Alert.alert(
  //         "Are you Sure?",
  //         "You want to Logout",
  //         [
  //             {
  //                 text: "No",
  //                 onPress: () => console.log("Cancel Pressed"),
  //                 style: "cancel"
  //             },
  //             { text: "Yes", onPress: () => logOut() }
  //         ]
  //     );
  // }

  return (
    <View style={{...styles.container}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, marginLeft: 20, marginTop: 45}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{
                borderRadius:60,
                borderWidth:5,
                borderColor:COLORS.primaryThemeColor,
                alignItems:'center',
                justifyContent:'center'
            }}>
              <Image
                style={styles.profileImage}
                source={require('./../Assets/Icons/profile.png')}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 15}}>
            <Text style={styles.title}>{username}</Text>
              <Text style={{fontWeight: '500'}}>candidate</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{marginTop: 5}}
            onPress={() => NavigationService.closeDrawer()}>
            <Icon name="arrow-back-ios" size={25} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            setCurrInd(0);
            NavigationService.navigate('Home');
          }}
          style={{
            backgroundColor:
              props.state.index == 0 && currInd == 0 ? '#DCBDED' : '#FFFFFF',
          }}
          // onPress={() => props.navigation.navigate('Home')}
        >
          <View style={[styles.row]}>
            <View style={styles.icon}>
              {/* <View style={{flex: 2}}>
                <Image
                  source={require('./../Assets/Icons/home.png')}
                  style={{
                    height: 22,
                    width: 22,
                    tintColor: '#767F8C',
                  }}
                />
              </View> */}

              <Text
                style={{
                  ...styles.name,
                  color:
                    props.state.index == 0 && currInd == 0
                      ? COLORS.primaryThemeColor
                      : '#000000',
                }}>
                Candidate Dashboard
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCurrInd(1);
            NavigationService.navigate('Home');
          }}
          style={{
            backgroundColor:
              props.state.index == 1 || currInd == 1 ? '#DCBDED' : '#FFFFFF',
          }}
          // onPress={() => props.navigation.navigate('Home')}
        >
          <View style={[styles.row]}>
            <View style={styles.icon}>
              <View style={{flex: 2}}>
                <Image
                  source={require('./../Assets/Icons/overview.png')}
                  style={{
                    height: 22,
                    width: 22,
                    tintColor:
                      props.state.index == 1 || currInd == 1
                        ? COLORS.primaryThemeColor
                        : '#767F8C',
                  }}
                />
              </View>

              <Text
                style={{
                  ...styles.name,
                  color:
                    props.state.index == 1 || currInd == 1
                      ? COLORS.primaryThemeColor
                      : '#000000',
                }}>
                Overview
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor:
              props.state.index == 2 || currInd == 2 ? '#DCBDED' : '#FFFFFF',
          }}>
          <TouchableOpacity
            style={[styles.row]}
            onPress={() => {
              setCurrInd(1);
              NavigationService.navigate('Profile');
            }}>
            <View style={styles.icon}>
              <View style={{flex: 2}}>
                <Image
                  source={require('./../Assets/Icons/user.png')}
                  style={{
                    height: 22,
                    width: 22,
                    tintColor:
                      props.state.index == 2 || currInd == 2
                        ? COLORS.primaryThemeColor
                        : '#767F8C',
                  }}
                />
              </View>

              <Text
                style={{
                  ...styles.name,
                  color:
                    props.state.index == 2 || currInd == 2
                      ? COLORS.primaryThemeColor
                      : '#000000',
                }}>
                My Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            setCurrInd(3);
            NavigationService.navigate('AppliedJobs');
          }}
          style={{
            backgroundColor:
              props.state.index == 3 || currInd == 3 ? '#DCBDED' : '#FFFFFF',
          }}
          // onPress={() => props.navigation.navigate('Home')}
        >
          <View style={[styles.row]}>
            <View style={styles.icon}>
              <View style={{flex: 2}}>
                <Image
                  source={require('./../Assets/Icons/brifcase.png')}
                  style={{
                    height: 22,
                    width: 22,
                    tintColor:
                      props.state.index == 3 || currInd == 3
                        ? COLORS.primaryThemeColor
                        : '#767F8C',
                  }}
                />
              </View>

              <Text
                style={{
                  ...styles.name,
                  color:
                    props.state.index == 3 || currInd == 3
                      ? COLORS.primaryThemeColor
                      : '#000000',
                }}>
                Applied Jobs
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrInd(4);
            NavigationService.navigate('SavedJobs');
          }}
          style={{
            backgroundColor:
              props.state.index == 4 || currInd == 4 ? '#DCBDED' : '#FFFFFF',
          }}
          // onPress={() => props.navigation.navigate('Home')}
        >
          <View style={[styles.row]}>
            <View style={styles.icon}>
              <View style={{flex: 2}}>
                {/* <Image
                  source={require('./../Assets/Icons/home.png')}
                  style={{
                    height: 22,
                    width: 22,
                    tintColor:props.state.index == 4 || currInd == 4 ? COLORS.primaryThemeColor : '#767F8C',
                  }}
                />   */}
                <Icon
                  name={'bookmark'}
                  size={27}
                  color={
                    props.state.index == 4 || currInd == 4
                      ? COLORS.primaryThemeColor
                      : '#767F8C'
                  }
                />
              </View>

              <Text
                style={{
                  ...styles.name,
                  color:
                    props.state.index == 4 || currInd == 4
                      ? COLORS.primaryThemeColor
                      : '#000000',
                }}>
                Saved Jobs
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCurrInd(5);
            NavigationService.navigate('Interviews');
          }}
          style={{
            backgroundColor:
              props.state.index == 5 || currInd == 5 ? '#DCBDED' : '#FFFFFF',
          }}
          // onPress={() => props.navigation.navigate('Home')}
        >
          <View style={[styles.row]}>
            <View style={styles.icon}>
              <View style={{flex: 2}}>
                <Image
                  source={require('./../Assets/Icons/clock.png')}
                  style={{
                    height: 22,
                    width: 22,
                    tintColor:
                      props.state.index == 5 || currInd == 5
                        ? COLORS.primaryThemeColor
                        : '#000000',
                  }}
                />
              </View>

              <Text
                style={{
                  ...styles.name,
                  color:
                    props.state.index == 5 || currInd == 5
                      ? COLORS.primaryThemeColor
                      : '#000000',
                }}>
                Scheduled Interviews
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCurrInd(6);
            NavigationService.navigate('SettingsDashBoard');
          }}
          style={{
            backgroundColor:
              props.state.index == 6 || currInd == 6 ? '#DCBDED' : '#FFFFFF',
          }}
          // onPress={() => props.navigation.navigate('Home')}
        >
          <View style={[styles.row]}>
            <View style={styles.icon}>
              <View style={{flex: 2}}>
                <Image
                  source={require('./../Assets/Icons/setting.png')}
                  style={{
                    height: 22,
                    width: 22,
                    tintColor:
                      props.state.index == 6 || currInd == 6
                        ? COLORS.primaryThemeColor
                        : '#767F8C',
                  }}
                />
              </View>

              <Text
                style={{
                  ...styles.name,
                  color:
                    props.state.index == 6 || currInd == 6
                      ? COLORS.primaryThemeColor
                      : '#000000',
                }}>
                Settings
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        
      </ScrollView>

      <View style={{ padding: 20, borderTopWidth: 0.5, borderColor: '#ccc' }}>
  <TouchableOpacity
    onPress={() => {
      Alert.alert(
        'Confirm Logout',
        'Are you sure you want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Logout Cancelled'),
            style: 'cancel',
          },
          {
            text: 'Logout',
            onPress: () => {
              // Add your logout logic here
              console.log('Logged out');
              NavigationService.navigate('SelectScreen');
            },
            style: 'destructive',
          },
        ],
        { cancelable: true }
      );
    }}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
    }}
  >
    <Icon name="logout" size={24} color="#767F8C" style={{ marginRight: 10 }} />
    <Text style={{ color: '#767F8C', fontSize: 16, fontWeight: '500' }}>Logout</Text>
  </TouchableOpacity>
</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 0.3,
    paddingHorizontal: 10,
    paddingVertical: 12,
    // marginLeft:15
    // borderColor: '#eaebeb'
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
    flex: 10,
    opacity: 0.8,
  },
  profileImage: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(60),
    borderWidth: 5,
    // borderColor:'#ff7235'
    borderColor: 'white',
    // marginVertical: 20,
    // marginBottom: 30
  },
  title: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#000000',
  },
});

//make this component available to the app
export default DrawerContentEmp;
