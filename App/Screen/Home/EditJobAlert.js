import CheckBox from '@react-native-community/checkbox';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../Components/Headers/Header';
import {COLORS} from '../../Constants/Colors';
import {CommonStyles} from '../../Constants/Styles';
import NavigationService from '../../Services/Navigation';
import AlertSetSuccess from './AlertSetSuccess';

const EditJobAlert = () => {
  const [fullTime, setFullTime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [freelance, setFreelance] = useState(false);
  const [internship, setInternship] = useState(false);

  // const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <Text style={styles.title}>Edit Job Alert</Text>
        <Text style={styles.label}>Job Type</Text>

        <View style={styles.checkboxContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={fullTime}
              onValueChange={() => setFullTime(!fullTime)}
            />
            <Text>Full Time</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={partTime}
              onValueChange={() => setPartTime(!partTime)}
            />
            <Text>Part Time</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={freelance}
              onValueChange={() => setFreelance(!freelance)}
            />
            <Text>Freelance</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={internship}
              onValueChange={() => setInternship(!internship)}
            />
            <Text>Internship</Text>
          </View>
        </View>

        <Dropdown
          style={[styles.input]}
          // placeholderStyle={styles.dropDownPlaceholderStyle}
          // selectedTextStyle={{color: Colors.black}}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            {label: 'Software Developer', value: 'Software Developer'},
            {label: 'Data SCientist', value: 'Data SCientist'},
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Preferred Designation'}
          // value={selectedValue}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}

          //   onChange={item => {
          //     console.log('item.valuee..', item.value);
          //     // setState(pre => ({ ...pre, category: item.value }));
          //   }}
        />

        <Dropdown
          style={[styles.input]}
          // placeholderStyle={styles.dropDownPlaceholderStyle}
          // selectedTextStyle={{color: Colors.black}}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            {label: 'Nagpur', value: 'Nagpur'},
            {label: 'Kolkata', value: 'Kolkata'},
            {label: 'Mumbai', value: 'Mumbai'},
            {label: 'Bangalore', value: 'Bangalore'},
            {label: 'Delhi', value: 'Delhi'},
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Preferred Location'}
          // value={selectedValue}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}

          //   onChange={item => {
          //     console.log('item.valuee..', item.value);
          //     // setState(pre => ({ ...pre, category: item.value }));
          //   }}
        />

        <Text style={{fontSize: 15, marginVertical: 10}}>
          Desired Salary Range
        </Text>
        <View style={styles.salaryContainer}>
          {/* <TextInput style={styles.salaryInput} placeholder="Min" /> */}
          <Dropdown
            style={[styles.salaryInput]}
            // placeholderStyle={styles.dropDownPlaceholderStyle}
            // selectedTextStyle={{color: Colors.black}}
            itemTextStyle={{
              color: 'black',
              marginVertical: -8,
            }}
            data={[
              {label: '15k', value: '15k'},
              {label: '30', value: '30'},
              {label: '45k', value: '45k'},
              {label: '60k', value: '60k'},
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Min'}
            // value={selectedValue}
            //onFocus={() => setIsFocus(true)}
            //onBlur={() => setIsFocus(false)}

            //   onChange={item => {
            //     console.log('item.valuee..', item.value);
            //     // setState(pre => ({ ...pre, category: item.value }));
            //   }}
          />

          <Dropdown
            style={[styles.salaryInput]}
            // placeholderStyle={styles.dropDownPlaceholderStyle}
            // selectedTextStyle={{color: Colors.black}}
            itemTextStyle={{
              color: 'black',
              marginVertical: -8,
            }}
            data={[
              {label: '30', value: '30'},
              {label: '45k', value: '45k'},
              {label: '60k', value: '60k'},
              {label: '80k', value: '80k'},
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Max'}
            // value={selectedValue}
            //onFocus={() => setIsFocus(true)}
            //onBlur={() => setIsFocus(false)}

            //   onChange={item => {
            //     console.log('item.valuee..', item.value);
            //     // setState(pre => ({ ...pre, category: item.value }));
            //   }}
          />
        </View>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => NavigationService.navigate('AlertSetSuccess')}
          // onPress={() => setModalVisible(true)}
          >
          <Text style={styles.buttonText}>Save and Continue </Text>
          <Icon name={'arrow-right'} size={22} color={'#FFFFFF'} />
        </TouchableOpacity>
        {/* <Modal
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType="slide"
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>This is a Modal!</Text>
              <Button title="Close Modal" onPress={()=>setModalVisible(false)} />
            </View>
          </View>
          <StatusBar
            translucent={true}
            backgroundColor="white"
            // backgroundColor="black"
            barStyle="dark-content"
          />
          <AlertSetSuccess />
        </Modal> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.boldText,
  },
  label: {
    fontSize: 16,
    color: COLORS.regularText,
    marginBottom: 5,
    marginTop: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 25,
    columnGap: 5,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F7F8F9',
  },
  salaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  salaryInput: {
    width: '48%',
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F7F8F9',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // modalContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   backgroundColor: 'white',
  // },
  // modalContent: {
  //   width: 300,
  //   padding: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 10,
  //   alignItems: 'center',
  // },
});

export default EditJobAlert;
