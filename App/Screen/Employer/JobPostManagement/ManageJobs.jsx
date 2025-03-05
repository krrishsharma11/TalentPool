import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Svg from '../../../assets/images/svg';
import CustomButton from '../../../reusableComponents/button/button';
import { theme } from '../../../utils';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';

const ManageJobs = ({navigation}) => {
  const [jobSections, setJobSections] = useState([
    {
      id: '1',
      title: 'Full-stack developer',
      isOpen: false,
      jobs: [
        {
          id: '1-1',
          title: 'Full-stack developer 1',
          location: 'Nagpur',
          startDate: '12-11-2024',
          endDate: '12-12-2024',
          status: 'Active',
        },
        {
          id: '1-2',
          title: 'Full-stack developer 2',
          location: 'Nagpur',
          startDate: '12-11-2024',
          endDate: '12-12-2024',
          status: 'Closed',
        },
        {
          id: '1-3',
          title: 'Full-stack developer 3',
          location: 'Nagpur',
          startDate: '12-11-2024',
          endDate: '12-12-2024',
          status: 'Expired',
        },
        {
          id: '1-4',
          title: 'Full-stack developer 4',
          location: 'Nagpur',
          startDate: '12-11-2024',
          endDate: '12-12-2024',
          status: 'Active',
        },
      ],
    },
    {
      id: '2',
      title: 'Software Developer',
      isOpen: false,
      jobs: [
        {
            id: '1-1',
            title: 'Full-stack developer 1',
            location: 'Nagpur',
            startDate: '12-11-2024',
            endDate: '12-12-2024',
            status: 'Active',
          },
          {
            id: '1-2',
            title: 'Full-stack developer 2',
            location: 'Nagpur',
            startDate: '12-11-2024',
            endDate: '12-12-2024',
            status: 'Closed',
          },
          {
            id: '1-3',
            title: 'Full-stack developer 3',
            location: 'Nagpur',
            startDate: '12-11-2024',
            endDate: '12-12-2024',
            status: 'Expired',
          },
      ],
    },
  ]);

  const toggleSection = (id) => {
    setJobSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  const renderJobCard = (job) => (
    <View style={styles.jobCard} key={job.id}>
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.jobLocation}> <Svg.LocationIcon size={12}/> {job.location}</Text>
        <View style={{flexDirection:'row', alignItems:'center', gap:'10'}}>
            <Text style={[
            job.status === 'Active' && { color: 'green' },
            job.status === 'Closed' && { color: 'red' },
            job.status === 'Expired' && { color: 'gray', textDecorationLine:'line-through' },
          ]}>

        {job.status}
        </Text>
             <View
          style={[
            styles.statusIndicator,
            job.status === 'Active' && { backgroundColor: 'green' },
            // job.status === 'Closed' && { backgroundColor: 'red' },
            // job.status === 'Expired' && { backgroundColor: 'gray' },
          ]}
        />
        
      </View>
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{width:'150'}}>
      <Text style={styles.jobDates}>Start: {job.startDate}</Text>
      <Text style={styles.jobDates}>End: {job.endDate}</Text>
       </View>

       <CustomButton
        title={job.status === 'Expired' ? 'Repost Job' : 'View'}
        textStyle={styles.jobButtonText}
         style={[
            styles.jobButton,
           
          ]}
         onPress={() => navigation.navigate(MainRoutes.MANAGEJOBS_DETAILS_sCREEN)}
        />
      
        </View>
       
    </View>
  );

  const renderJobSection = ({ item }) => (
    <View style={styles.jobSection}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => toggleSection(item.id)}
      >
        <View style={styles.sectionTitle}>
          <View style={styles.statusDot} />
          <Text style={styles.sectionText}>{item.title}</Text>
        </View>
        <Text style={styles.dropdownIcon}>
          {item.isOpen ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
      {item.isOpen && item.jobs.map(renderJobCard)}
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.headerRow}>
            <TouchableOpacity>
                <Svg.Drower color='black'/>
            </TouchableOpacity>
            <CustomTextInput placeholder={'Search'} style={{width:'250', height: '50'}} leftIcon={<Svg.SearchIcon color='#7900BA66'/>}/>
            <TouchableOpacity>
            <Image style={styles.profileIcon} source={require("../../../assets/images/person.jpg")}   />
            </TouchableOpacity>
        </View>
        <View style={styles.HorizontalLine}></View>
         <CustomButton
        title={"Job Title"}
        textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
         style={{width: theme.horizontalSpacing.space_187, height: theme.verticalSpacing.space_40, marginVertical: theme.verticalSpacing.space_20}}
        //  onPress={() => navigation.navigate(MainRoutes.JOB_SEEKER_SCREEN)}
        />
      {/* <TouchableOpacity style={styles.jobTitleButton}>
        <Text style={styles.jobTitleButtonText}>Job Title</Text>
      </TouchableOpacity> */}
      <FlatList
        data={jobSections}
        renderItem={renderJobSection}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerRow: {
    marginTop:theme.verticalSpacing.space_38,
    marginBottom: theme.verticalSpacing.space_38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileIcon:{
    width: theme.horizontalSpacing.space_34,
    height: theme.horizontalSpacing.space_34,
    borderRadius: theme.boderRadius.xxxXlarge_25,
    borderColor: theme.lightColor.purple,
  },
  jobTitleButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 15,
  },
  jobTitleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  HorizontalLine:{
    height: theme.verticalSpacing.space_4,
    width: theme.horizontalSpacing.space_328,
    backgroundColor: theme.lightColor.lightGrayColor,
    textAlign:'center',
    margin:'auto'
  },
  list: {
    paddingBottom: 20,
  },
  jobSection: {
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F7F8F9',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 10,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownIcon: {
    fontSize: 16,
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 12,
    color: '#666',
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  jobDates: {
    fontSize: 12,
    color: '#999',
    marginVertical: 2,
  },
  jobButton: {
    marginTop: 10,
    height:'40',
    width:'100',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
 
  jobButtonText: {
    color: '#fff',
    fontSize: theme.fontSizes.size_12,
  },
});

export default ManageJobs;
