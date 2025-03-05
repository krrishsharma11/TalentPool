import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonStyles} from '../../Constants/Styles';
import {COLORS} from '../../Constants/Colors';
import NavigationService from '../../Services/Navigation';
import {Dropdown} from 'react-native-element-dropdown';

const ApplicationDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        // translucent={true}
        backgroundColor="white"
        // backgroundColor="black"
        barStyle="dark-content"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 90,
        }}>
        <TouchableOpacity onPress={() => NavigationService.back()}>
          <Icon name="arrow-back-ios" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Application Details</Text>
        <View></View>
      </View>

      {/* <Image
        style={{height: 84, width: 89}}
        source={require('../../Assets/Icons/CheckCircle.png')}
      /> */}

      {/* <Text style={styles.subtitle}>
        You’ll receive notifications whenever a new job matching your
        preferences is posted
      </Text> */}
      <View style={{marginTop: 50}}>
        <Dropdown
          style={{...CommonStyles.Dropdown}}
          placeholderStyle={{color: 'white', paddingLeft: 100}}
          iconColor="white"
          // selectedTextStyle={{color: Colors.black}}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            {label: 'Information1', value: 'Information1'},
            {label: 'Information2', value: 'Information2'},
            {label: 'Information3', value: 'Information3'},
            {label: 'Information4', value: 'Information4'},
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Applicant Information'}
          // value={selectedValue}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}

          //   onChange={item => {
          //     console.log('item.valuee..', item.value);
          //     // setState(pre => ({ ...pre, category: item.value }));
          //   }}
        />
        <Dropdown
          style={{...CommonStyles.Dropdown}}
          placeholderStyle={{color: 'white', paddingLeft: 100}}
          iconColor="white"
          // selectedTextStyle={{color: Colors.black}}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            {label: 'Information1', value: 'Information1'},
            {label: 'Information2', value: 'Information2'},
            {label: 'Information3', value: 'Information3'},
            {label: 'Information4', value: 'Information4'},
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Applicant Proggress'}
          // value={selectedValue}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}

          //   onChange={item => {
          //     console.log('item.valuee..', item.value);
          //     // setState(pre => ({ ...pre, category: item.value }));
          //   }}
        />

        <Dropdown
          style={{...CommonStyles.Dropdown}}
          placeholderStyle={{color: 'white', paddingLeft: 100}}
          iconColor="white"
          // selectedTextStyle={{color: Colors.black}}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            {label: 'Information1', value: 'Information1'},
            {label: 'Information2', value: 'Information2'},
            {label: 'Information3', value: 'Information3'},
            {label: 'Information4', value: 'Information4'},
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Submittend Documents'}
          // value={selectedValue}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}

          //   onChange={item => {
          //     console.log('item.valuee..', item.value);
          //     // setState(pre => ({ ...pre, category: item.value }));
          //   }}
        />
      </View>

      <View>
        <ProgressTimeline />
      </View>
    </View>
  );
};

const ProgressTimeline = () => {
  const steps = [
    {label: 'Application Submitted', status: 'completed'},
    {label: 'Under Review', status: 'completed'},
    {label: 'Shortlisted / Rejected', status: 'active'},
    {label: 'Interview Scheduled', status: 'upcoming'},
  ];

  return (
    <View style={{padding: 16}}>
      <Text style={styles.progressTitle}>Your Progress</Text>
      <View style={styles.timeline}>
        {steps.map((step, index) => (
          <View key={index}>
            {index !== 0 && <View style={styles.line} />}
            <View style={{flexDirection:'row'}}>
              <View
                style={[
                  styles.circle,
                  step.status === 'completed' && styles.completedCircle,
                  step.status === 'active' && styles.activeCircle,
                ]}>
                {step.status === 'completed' && (
                  <MaterialIcon name="check" size={18} color="#FFF" />
                )}
                {step.status === 'active' && <Image  style={{height:35,width:35}} source={require('../../Assets/Icons/dotshadow.png')}/>}
                
              </View>
              <Text style={styles.label}>{step.label}</Text>
            </View>
          </View>
        ))}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
    fontWeight: '500',
    color: COLORS.boldText2,
    // marginVertical: 15,
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

  //   container: {
  //     padding: 16,
  //   },
  progressTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 30,
    color:COLORS.regularText2
  },
  timeline: {
    flexDirection: 'column',
  },
  
  line: {
    // position: 'absolute',
    width: 3,
    height: 50,
    backgroundColor: '#9B59B6',
    marginLeft:20
    // left: 12,
    // top: -20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#9B59B6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  completedCircle: {
    backgroundColor: '#6A0DAD',
    borderColor: '#6A0DAD',
  },
  activeCircle: {
    // backgroundColor: '#E1C4F3',
  },
//   innerDot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: '#6A0DAD',
//   },
  label: {
    marginLeft: 16,
    fontSize: 15,
    fontWeight:'500',
    color: '#333',
    marginTop:2
  },

});

export default ApplicationDetails;
