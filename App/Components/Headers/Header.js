import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationService from '../../Services/Navigation';

const Header = ({greeting}) => {
  return (
    <LinearGradient
      //   colors={['#8134AF', '#5E1F9F']}
      //   colors={['#401757', '#5E1F9F']}
      // colors={['#612f84', '#8a4dbc']}
      colors={['#3E1654', '#9857CF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.gradient}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.topRow}>
          <View style={{flexDirection: 'row', columnGap: 15}}>
            <TouchableOpacity style={{padding:10}} onPress={()=>NavigationService.openDrawer()}>
              <Icon name="menu" size={28} color="white" />
            </TouchableOpacity>
            <View style={{marginTop:greeting?0:10}}>
              {greeting && <Text style={{color:'white',fontSize:15,marginTop:-5}}>Hello,</Text>}
              <Text style={styles.title}>Ninad Sathe</Text>
            </View>
          </View>

          <View style={styles.iconRow}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 10,
              }}>
              <TouchableOpacity style={styles.iconButton}>
                {/* <Icon name="message-circle" size={22} color="white" /> */}
                <Image
                  source={require('../../Assets/Icons/message.png')}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={()=>NavigationService.navigate('Interviews')}>
                <Icon name="bell" size={22} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../Assets/Icons/profile.png')}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    paddingBottom: 45,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between'
  },
  iconButton: {
    marginHorizontal: 8,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Header;

// import React from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/Feather";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// const Header = () => {
//   const insets = useSafeAreaInsets(); // Handle Safe Area for iOS

//   return (
//     <View style={{ backgroundColor: "#8134AF" }}> {/* Backup solid color */}
//       <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
//       <LinearGradient
//         colors={["#8134AF", "#5E1F9F"]}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={[styles.header, { paddingTop: insets.top + 10 }]}
//       >
//         <View style={styles.topRow}>
//           {/* Left: Hamburger Menu */}
//           <TouchableOpacity>
//             <Icon name="menu" size={28} color="white" />
//           </TouchableOpacity>

//           {/* Center: User Name */}
//           <Text style={styles.title}>Ninad Sathe</Text>

//           {/* Right: Icons */}
//           <View style={styles.iconRow}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="message-circle" size={22} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="bell" size={22} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
//                 style={styles.profileImage}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: 15,
//     paddingBottom: 15,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "white",
//   },
//   iconRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconButton: {
//     marginHorizontal: 8,
//   },
//   profileImage: {
//     width: 35,
//     height: 35,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: "white",
//   },
// });

// export default Header;
