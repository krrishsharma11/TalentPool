import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS} from '../../Constants/Colors';
import Header from '../../Components/Headers/Header';
import WorkExperience from '../../Components/Profile/Workexperience';
import Certification from '../../Components/Profile/Certification';
import Skills from '../../Components/Profile/Skills';
import UploadDocuments from '../../Components/Profile/UploadDocuments';
import BasicDetails from '../../Components/Profile/BasicDetails';
import EducationDetails from '../../Components/Profile/EducationDetails';

const Profile = () => {
  const [currTab, setCurrTab] = useState('1');

  const flatListRef = useRef(null);

  // const scrollToItem = index => {
  //   flatListRef.current?.scrollToIndex({index, animated: true});
  // };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: currTab-1, animated: true});
    }
  }, [currTab]);

  const handleScrollToIndexFailed = (info) => {
    const wait = new Promise((resolve) => setTimeout(resolve, 500));
    wait.then(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
    });
  };

  const buttons = [
    {
      id: '1',
      title: 'Basic Details',
      image: require('../../Assets/Icons/basicdetails.png'),
    },
    {
      id: '2',
      title: 'Education Details',
      image: require('../../Assets/Icons/education.png'),
    },
    {
      id: '3',
      title: 'Work Experience',
      image: require('../../Assets/Icons/experience.png'),
    },
    {
      id: '4',
      title: 'Certification',
      image: require('../../Assets/Icons/certifitication.png'),
    },
    {id: '5', title: 'Skills', image: require('../../Assets/Icons/skills.png')},
    {
      id: '6',
      title: 'Upload Documents',
      image: require('../../Assets/Icons/uploaddoc.png'),
    },
  ];

  const renderItem = ({item, index}) => (
    <View key={index} style={{}}>
      {/* <Button
        title={item.title}
        onPress={() => alert(`${item.title} pressed`)}
      /> */}
      <TouchableOpacity
        style={{
          ...styles.tabButton,
          borderColor:
            currTab == item.id ? COLORS.primaryThemeColor : '#FFFFFF',
        }}
        onPress={() => setCurrTab(item.id)}>
        <Image
          style={{height: 24, width: 24}}
          source={item.image}
          tintColor={currTab == item.id ? COLORS.primaryThemeColor : '#000000'}
        />
        <Text
          style={{
            ...styles.btnText,
            color: currTab == item.id ? COLORS.primaryThemeColor : '#000000',
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: COLORS.pageBackgroundColor}}>
      <View>
        <Header />
      </View>
      <View style={{marginTop: 20}}>
        <FlatList
          ref={flatListRef}
          horizontal // Enable horizontal scrolling
          data={buttons}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          getItemLayout={(data, index) => ({
            length: 120, // Width of each item
            offset: 120 * index, // Position of item
            index,
          })}
          onScrollToIndexFailed={handleScrollToIndexFailed}
        />
      </View>

      {currTab == '1' && <BasicDetails setCurrTab={setCurrTab} />}
      {currTab == '2' && <EducationDetails setCurrTab={setCurrTab} />}
      {currTab == '3' && <WorkExperience setCurrTab={setCurrTab} />}
      {currTab == '4' && <Certification setCurrTab={setCurrTab} />}
      {currTab == '5' && <Skills setCurrTab={setCurrTab} />}
      {currTab == '6' && <UploadDocuments setCurrTab={setCurrTab} />}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tabButton: {
    flexDirection: 'row',
    columnGap: 5,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primaryThemeColor,
    paddingHorizontal: 10,
    paddingVertical: 4,
    // marginHorizontal: 8,
  },
  flatListContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  btnText: {
    color: '#767F8C',
    fontSize: 15,
    fontWeight: '600',
  },
  // button: {
  //   marginHorizontal: 5, // Add spacing between buttons
  // },
});
