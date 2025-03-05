import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Svg from '../../../assets/images/svg';
import {theme} from '../../../utils';
import CustomDropDownTextInput from '../../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import CustomButton from '../../../reusableComponents/button/button';
import { ScrollView } from 'react-native-gesture-handler';

const JobEmployerViewScreen = () => {

  const jobs = [
    { id: '1', title: 'Front End', type: 'Full Time', days: '13 days remaining', applicants: 112, status: false },
    { id: '2', title: 'Software Engineer', type: 'Intern', days: '25 days remaining', applicants: 440, status: true },
    { id: '3', title: 'Product Designer', type: 'Intern', days: '17 days remaining', applicants: 316, status: true },
    { id: '4', title: 'UI/UX Designer', type: 'Intern', days: '30 days remaining', applicants: 620, status: true },
    { id: '5', title: 'Front End', type: 'Full Time', days: '13 days remaining', applicants: 112, status: false },
    { id: '6', title: 'Software Engineer', type: 'Intern', days: '25 days remaining', applicants: 440, status: true },
    { id: '7', title: 'Data Scientist', type: 'Full Time', days: '10 days remaining', applicants: 325, status: true },
    { id: '8', title: 'Mobile Developer', type: 'Part Time', days: '5 days remaining', applicants: 158, status: false },
    { id: '9', title: 'Backend Developer', type: 'Full Time', days: '12 days remaining', applicants: 234, status: false },
    { id: '10', title: 'Product Manager', type: 'Full Time', days: '20 days remaining', applicants: 410, status: true },
    { id: '11', title: 'Data Analyst', type: 'Intern', days: '8 days remaining', applicants: 198, status: false },
    { id: '12', title: 'Web Designer', type: 'Full Time', days: '15 days remaining', applicants: 128, status: false },
    { id: '13', title: 'Marketing Specialist', type: 'Intern', days: '30 days remaining', applicants: 150, status: false },
    { id: '14', title: 'DevOps Engineer', type: 'Full Time', days: '3 days remaining', applicants: 58, status: false },
    { id: '15', title: 'Quality Assurance', type: 'Part Time', days: '28 days remaining', applicants: 92, status: false },
  ];
  




  const RenderJobCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.type}>{item.type}</Text>
        
        <View style={styles.bulletPointContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.days}>{item.days}</Text>
        </View>
      </View>
  
      <View style={styles.statusContainer}>
        {item.status ? <Svg.CheckCircle /> : <Svg.XcircleIcon />}
      </View>
  
      <View style={styles.applicantsContainer}>
        <Svg.PersonIcon />
        <Text>{item.applicants}</Text>
      </View>
  
      <CustomButton title={'View'} style={styles.viewButton} />
      
      <TouchableOpacity style={styles.dotsContainer}>
        <Svg.ThreeVerticalDotsIcon />
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <View>
        {/* linear colours ui */}
        <Image
          style={styles.header}
          source={require('../../../assets/images/pageBackground.png')}
        />
        <View
          style={{
            position: 'absolute',
            top: 63,
            left: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: theme.horizontalSpacing.space_10,
            }}>
            <TouchableOpacity>
              <Svg.Drower />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: theme.fontSizes.size_14,
                  fontWeight: '500',
                  color: '#fff',
                }}>
                Hello ,
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSizes.size_24,
                  fontWeight: '600',
                  color: '#fff',
                }}>
                Arpit
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: theme.horizontalSpacing.space_10,
            }}>
            <TouchableOpacity>
              <Svg.MessageIcon color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Svg.SimpleBellIcon color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/images/person.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* outside header  */}
      <ScrollView style={styles.Container}>
        <View style={styles.allJobContainer}>
          <Text>All Jobs</Text>
          <CustomDropDownTextInput
            value={undefined}
            onChange={undefined}
            placeholder={undefined}
            style={{width: '40%'}}
            data={[
              {label: 'All Jobs', value: 'AllJobs'},
              {label: 'View Details', value: 'View Details'},
              {label: 'Mark As Expire', value: 'Mark As Expire'},
            ]}
            inputStyle={undefined}
          />
        </View>
        <Text style={styles.middelText}>
          Post jobs to find and hire top talent quickly.
        </Text>

        {/* job post titiles heading */}
        <View style={{}} >
        <View style={styles.jobpostHeading} >
            <Text>Jobs</Text>
            <Text>Status</Text>
            <Text>Application</Text>
            <Text>View</Text>

        </View>
        <View>

        <FlatList
        data={jobs} 
        renderItem={RenderJobCard}
        keyExtractor={item => item.id}
        />
        </View>



<View style={styles.pagination}>
  <TouchableOpacity style={styles.arrowButton}>
    <Svg.ArrowBack />
    {/* <Ionicons name="chevron-back" size={24} color="#6D0EB5" /> */}
  </TouchableOpacity>

  {['01', '02', '03', '04', '05'].map((num, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.pageButton, num === '04' && styles.activePage]}>
      <Text style={[styles.pageText, num === '04' && styles.activeText]}>
        {num}
      </Text>
    </TouchableOpacity>
  ))}

  <TouchableOpacity style={styles.arrowButton}>
    <Svg.ArrowNext />
    {/* <Ionicons name="chevron-forward" size={24} color="#6D0EB5" /> */}
  </TouchableOpacity>
</View>


        </View>

      </ScrollView>
    </>
  );
};

export default JobEmployerViewScreen;

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: theme.horizontalSpacing.space_30,
    borderBottomRightRadius: theme.horizontalSpacing.space_30,
    paddingVertical: theme.verticalSpacing.space_20,
    paddingHorizontal: theme.horizontalSpacing.space_18,
    height: theme.verticalSpacing.space_214,
    flexDirection: 'row',
    gap: theme.horizontalSpacing.space_16,
    position: 'relative',
  },
  profileIcon: {
    width: theme.horizontalSpacing.space_34,
    height: theme.horizontalSpacing.space_34,
    borderRadius: theme.boderRadius.xxxXlarge_25,
    borderColor: theme.lightColor.purple,
  },
  Container: {
    marginHorizontal: theme.horizontalSpacing.space_18,
    marginTop: theme.verticalSpacing.space_20,
    marginBottom: theme.verticalSpacing.space_10,
  },
  allJobContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middelText: {
    color: theme.lightColor.gray,
    textAlign: 'center',
    marginTop: theme.verticalSpacing.space_16,
  },
  jobpostHeading:{
    backgroundColor: '#F0E3F7',
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical: theme.verticalSpacing.space_14,
    borderRadius: theme.boderRadius.medium_8,
    marginTop: theme.verticalSpacing.space_30,
    marginBottom: theme.verticalSpacing.space_10,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.verticalSpacing.space_10,
    gap: 4,
  },
  bullet:{
    color: theme.lightColor.gray,
    fontSize: theme.fontSizes.size_16,
  },






  cardContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.lightColor.gray,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: theme.verticalSpacing.space_10,
    padding: theme.horizontalSpacing.space_14,
    borderRadius: theme.boderRadius.large_10, // Add rounded corners for a cleaner look
  },
  leftSection: {
    flex: 1, // Ensures this section takes up as much space as needed
  },
  title: {
    fontSize: theme.fontSizes.size_18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: theme.fontSizes.size_14,
    color: theme.lightColor.gray,
  },

  days: {
    fontSize: theme.fontSizes.size_14,
    color: theme.lightColor.gray,
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  applicantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.verticalSpacing.space_6, 
    gap: theme.horizontalSpacing.space_2,
    marginHorizontal: theme.horizontalSpacing.space_6,
  },
  viewButton: {
    width: '30%',
    height: theme.verticalSpacing.space_40, // Adjust height for the button to make it consistent
  },
  dotsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.verticalSpacing.space_10, // Add some space between the dots and the other elements
  },



  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.verticalSpacing.space_20,
  },
  arrowButton: {
    padding: 10,
    marginHorizontal: theme.horizontalSpacing.space_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageButton: {
    marginHorizontal: theme.horizontalSpacing.space_4,
    padding: theme.horizontalSpacing.space_10,
    borderRadius: theme.boderRadius.xxxXlarge_45,
    // backgroundColor: '#f0f0f0', // default background color for inactive pages
  },
  activePage: {
    backgroundColor: theme.lightColor.purple, // purple background for selected page
  },
  pageText: {
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.blackColor, // default color for page text
  },
  activeText: {
    color: '#fff', // white text color for selected page
  },

});
