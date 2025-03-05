
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {theme} from '../../../utils';
import * as Svg from '../../../assets/images/svg';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';
const ApplicationScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('application');
  const applications = [
    {
      id: '1',
      name: 'Ravi Deshmukh',
      role: 'UI/UX Designer',
      experience: '7 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 23, 2022',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Ronald Richards',
      role: 'Product Designer',
      experience: '7 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 23, 2022',
      status: 'shortlisted',
    },
    {
      id: '3',
      name: 'Ronald Richards',
      role: 'User Experience Designer',
      experience: '7 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 23, 2022',
      status: 'rejected',
    },
    {
      id: '4',
      name: 'Ravi Deshmukh',
      role: 'UI/UX Designer',
      experience: '7 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 23, 2022',
      status: 'pending',
    },
    {
      id: '5',
      name: 'Ravi Deshmukh',
      role: 'UI/UX Designer',
      experience: '7 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 23, 2022',
      status: 'pending',
    },
    {
      id: '6',
      name: 'Ravi Deshmukh',
      role: 'UI/UX Designer',
      experience: '7 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 23, 2022',
      status: 'pending',
    },
  ];
 
  const shortlistedApplications = [
    {
      id: '4',
      name: 'Robert King',
      role: 'UI/UX Designer',
      experience: '6 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 20, 2022',
      status: 'screening', // Updated status to "screening"
      location: 'Pune, Maharashtra', // Added location
    },
    {
      id: '5',
      name: 'Olivia Williams',
      role: 'Product Designer',
      experience: '8 Years Experience',
      education: 'Education: PhD',
      appliedDate: 'Applied: Jan 18, 2022',
      status: 'screening in progress', // Updated status to "screening in progress"
      location: 'Pune, Maharashtra', // Added location
    },
    {
      id: '6',
      name: 'David Smith',
      role: 'UX Designer',
      experience: '5 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 19, 2022',
      status: 'screening', // Updated status to "screening"
      location: 'Pune, Maharashtra', // Added location
    },
    {
      id: '7',
      name: 'Sophia Turner',
      role: 'Frontend Developer',
      experience: '4 Years Experience',
      education: 'Education: Bachelor Degree',
      appliedDate: 'Applied: Jan 15, 2022',
      status: 'screening', // Updated status to "screening"
      location: 'Mumbai, Maharashtra', // Added location
    },
    {
      id: '8',
      name: 'James Brown',
      role: 'Backend Developer',
      experience: '7 Years Experience',
      education: 'Education: Master Degree',
      appliedDate: 'Applied: Jan 22, 2022',
      status: 'screening in progress', // Updated status to "screening in progress"
      location: 'Bangalore, Karnataka', // Added location
    },
    {
      id: '9',
      name: 'Isabella Johnson',
      role: 'Data Scientist',
      experience: '3 Years Experience',
      education: 'Education: PhD',
      appliedDate: 'Applied: Jan 10, 2022',
      status: 'screening', // Updated status to "screening"
      location: 'Hyderabad, Telangana', // Added location
    },
    {
      id: '10',
      name: 'Liam Martinez',
      role: 'Mobile App Developer',
      experience: '6 Years Experience',
      education: 'Education: Bachelor Degree',
      appliedDate: 'Applied: Jan 5, 2022',
      status: 'screening in progress', // Updated status to "screening in progress"
      location: 'Chennai, Tamil Nadu', // Added location
    },
    {
      id: '11',
      name: 'Emma Clark',
      role: 'Graphic Designer',
      experience: '2 Years Experience',
      education: 'Education: Bachelor Degree',
      appliedDate: 'Applied: Jan 12, 2022',
      status: 'screening', // Updated status to "screening"
      location: 'Delhi', // Added location
    },
    {
      id: '12',
      name: 'Mason Lee',
      role: 'Product Manager',
      experience: '10 Years Experience',
      education: 'Education: MBA',
      appliedDate: 'Applied: Jan 25, 2022',
      status: 'screening in progress', // Updated status to "screening in progress"
      location: 'Kolkata, West Bengal', // Added location
    },
  ];

  const ScreeningApplication = [
    {
      id: '1',
      name: 'Ravi Deshmukh',
      role: 'UI/UX Designer',
      interview: [
        {
          round: 'Round 1',
          date: '01-01-2025',
          time: '10:00 AM',
          actions: ['Re-Schedule', 'Done'],
        },
        {
          round: 'Round 2',
          date: '02-01-2025',
          time: '11:00 AM',
          actions: ['Schedule', 'Done'],
        },
      ],
    },
    {
      id: '2',
      name: 'Anjali Sharma',
      role: 'Frontend Developer',
      interview: [
        {
          round: 'Round 1',
          date: '03-01-2025',
          time: '09:30 AM',
          actions: ['Re-Schedule', 'Done'],
        },
      ],
    },
    {
      id: '3',
      name: 'Manish Kumar',
      role: 'Backend Developer',
      interview: [
        {
          round: 'Round 1',
          date: '01-01-2025',
          time: '12:00 PM',
          actions: ['Re-Schedule', 'Done'],
        },
        {
          round: 'Round 2',
          date: '02-01-2025',
          time: '02:00 PM',
          actions: ['Schedule', 'Done'],
        },
        {
          round: 'Round 3',
          date: '03-01-2025',
          time: '03:30 PM',
          actions: ['Schedule', 'Done'],
        },
      ],
    },
  ];
  
  
    

  const renderApplication = ({item}) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={{flexDirection:'row', gap: theme.horizontalSpacing.space_14}}>

       <TouchableOpacity>
                <Image
                  style={styles.profileIcon}
                  source={require('../../../assets/images/person.jpg')}
                  />
       </TouchableOpacity>
      <View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.role}>{item.role}</Text>
      </View>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate(MainRoutes.CANDIDATE_PROFILE_SCREEN)} >
      <Svg.EyeOpen color='#3E1654'/>
                  </TouchableOpacity>
      </View>
            <View style={styles.HorizontalLine}></View>
      

      <View style={styles.bulletPointContainer}>
      <Text style={styles.bullet}>•</Text>  
      <Text style={styles.details}>{item.experience}</Text>
      </View>
      <View style={styles.bulletPointContainer}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.details}>{item.education}</Text>
      </View>
      <View style={styles.bulletPointContainer}>
      <Text style={styles.bullet}>•</Text>  
      <Text style={styles.details}>{item.appliedDate}</Text>
      </View>
      {item.status === 'pending' && (
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.acceptButton}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectButton}>
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}
      {item.status === 'shortlisted' && (
        <TouchableOpacity style={styles.shortlistedButton}>
          <Text style={styles.buttonText}>Shortlisted</Text>
        </TouchableOpacity>
      )}
      {item.status === 'rejected' && (
        <TouchableOpacity style={styles.rejectedButton}>
          <Text style={styles.buttonText}>Rejected</Text>
        </TouchableOpacity>
      )}
    </View>
  );

 const renderShortlistedApplication = ({item}) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={{flexDirection:'row', gap: theme.horizontalSpacing.space_14}}>

       <TouchableOpacity>
                <Image
                  style={styles.profileIcon}
                  source={require('../../../assets/images/person.jpg')}
                  />
       </TouchableOpacity>
      <View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.role}>{item.role}</Text>
      </View>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate(MainRoutes.CANDIDATE_PROFILE_SCREEN)} >
      <Svg.EyeOpen color='#3E1654'/>
                  </TouchableOpacity>
      </View>
            <View style={styles.HorizontalLine}></View>
      

      <View style={styles.bulletPointContainer}>
      <Text style={styles.bullet}>•</Text>  
      <Text style={styles.details}>{item.experience}</Text>
      </View>
      <View style={styles.bulletPointContainer}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.details}>{item.education}</Text>
      </View>
      <View style={styles.bulletPointContainer}>
      <Text style={styles.bullet}>•</Text>  
      <Text style={styles.details}>{item.appliedDate}</Text>
      </View>
      <View style={styles.bulletPointContainer}>
        <View style={styles.locationIcon}>
      <Svg.LocationIcon  size={9} color='#5E6670' />
        </View>
      <Text style={styles.details}>{item.appliedDate}</Text>
      </View>
      {item.status === 'screening' ? (
        <TouchableOpacity style={styles.screnningButton}>
          <Text style={styles.buttonText}>Screening</Text>
        </TouchableOpacity>
      ): (
        <TouchableOpacity style={styles.screeninginprogressButton}>
          <Text style={styles.buttonText}>Screening in Progress</Text>
        </TouchableOpacity>
      ) }
    </View>
  );


 const [isDropdownOpen, setIsDropdownOpen] = useState({});

 const toggleDropdown = (userId) => {
  setIsDropdownOpen((prevState) => ({
    ...prevState,
    [userId]: !prevState[userId], // Toggle dropdown for specific user
  }));
};


const handleStatusChange = (id, status) => {
    setRounds((prevRounds) =>
      prevRounds.map((round) =>
        round.id === id ? { ...round, status } : round
      )
    );
  };

  const renderRound = ({ item }) => (
    <View style={styles.roundContainer}>
      <View style={styles.roundInfo}>
        <Text style={styles.roundTitle}>{item.round}</Text>
        <Text style={styles.roundText}>Date: {item.date}</Text>
        <Text style={styles.roundText}>Time: {item.time}</Text>
      </View>
      <View style={styles.buttonGroup}>
        {item.status !== 'Done' && (
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => handleStatusChange(item.id, 'Reschedule')}
          >
            <Text style={styles.scheduleButtonText}>
              {item.status === 'Reschedule' ? 'Re-Schedule' : 'Schedule'}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => handleStatusChange(item.id, 'Done')}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
 


  const renderScreeningApplication = ({item}) =>(
    <>
      <View style={styles.container}>
           {/* Profile Section */}
           <View style={styles.profileCard}>
            <View style={{flexDirection:'row', gap: 8,}} >
            <TouchableOpacity>
                <Image
                  style={styles.profileIcon}
                  source={require('../../../assets/images/person.jpg')}
                  />
       </TouchableOpacity>
       <View>
             <Text style={styles.profileName}>{item.name}</Text>
             <Text style={styles.profileRole}>{item.role}</Text>
       </View>
            </View>
             <TouchableOpacity style={styles.dropdownToggle} onPress={() => toggleDropdown(item.id)}>
               <Text style={styles.dropdownText}>Schedule an interview</Text>
               <Text style={styles.dropdownArrow}>
                 {isDropdownOpen[item.id] ? '\u25B2' : '\u25BC'}
               </Text>
             </TouchableOpacity>
           </View>
     
           {/* Dropdown Content */}
           {isDropdownOpen[item.id] && (
             <View style={styles.dropdownContent}>
               <FlatList
                 data={item.interview}
                 renderItem={renderRound}
                 keyExtractor={(item) => item.round}
                 scrollEnabled={true}
               />
             </View>
           )}
         </View>
    </>
  )
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Svg.Drower color="black" />
        </TouchableOpacity>
        <CustomTextInput
          placeholder={'Search'}
          style={{width: '250', height: '50'}}
          leftIcon={<Svg.SearchIcon color="#7900BA66" />}
        />
        <TouchableOpacity>
          <Image
            style={styles.profileIcon}
            source={require('../../../assets/images/person.jpg')}
          />
        </TouchableOpacity>
      </View>
      {/* Tab Changer */}
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setActiveTab('application')}
          style={[
            styles.tabButton,
            activeTab === 'application' && styles.activeTab,
          ]}>
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'application' && styles.activeTabText,
            ]}>
            Application
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('shortlisted')}
          style={[
            styles.tabButton,
            activeTab === 'shortlisted' && styles.activeTab,
          ]}>
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'shortlisted' && styles.activeTabText,
            ]}>
            Shortlisted
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('screening')}
          style={[
            styles.tabButton,
            activeTab === 'screening' && styles.activeTab,
          ]}>
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'screening' && styles.activeTabText,
            ]}>
            Screening
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Based on Active Tab */}
      <View style={styles.content}>
        <Text style={styles.heading}>
          {activeTab === 'application'
            ? 'All Applications (213)'
            : activeTab === 'shortlisted'
            ? 'Shortlisted Applications (4)'
            : 'Total Candidate in  Screening'}
        </Text>
        <View >
          {activeTab === 'application' &&
          (<FlatList
            data={applications}
            renderItem={renderApplication}
            keyExtractor={item => item.id}
          />
          ) }

          {activeTab === 'shortlisted' &&
          (<FlatList
            data={shortlistedApplications}
            renderItem={renderShortlistedApplication}
            keyExtractor={item => item.id}
          />
          ) }
          {activeTab === 'screening' && 
          (<FlatList
            data={ScreeningApplication}
            renderItem={renderScreeningApplication}
            keyExtractor={item => item.id}
          />
          )
          }
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: theme.verticalSpacing.space_16,
  },
  headerRow: {
    marginTop: theme.verticalSpacing.space_38,
    marginBottom: theme.verticalSpacing.space_38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    width: theme.horizontalSpacing.space_48,
    height: theme.horizontalSpacing.space_48,
    borderRadius: theme.boderRadius.xxxXlarge_25,
    borderColor: theme.lightColor.purple,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    paddingVertical: theme.verticalSpacing.space_10,
    paddingHorizontal: theme.horizontalSpacing.space_20,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#6200ee',
  },
  tabButtonText: {
    color: '#888',
    fontSize: theme.fontSizes.size_16,
  },
  activeTabText: {
    color: '#6200ee',
    fontWeight: 'bold',
  },
  content: {
    // flex:1,
    padding: theme.horizontalSpacing.space_20,
  backgroundColor:'#570B8033',
  marginTop: theme.verticalSpacing.space_52,
  borderRadius:theme.boderRadius.xlarge_12,
  
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign:'center'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: theme.boderRadius.medium_8,
    padding: theme.verticalSpacing.space_14,
    marginBottom: theme.verticalSpacing.space_16,
    elevation: 2,
  },
  name: {
    fontSize: theme.fontSizes.size_14,
    fontWeight: 'bold',
    color: theme.lightColor.blackColor,
  },
  role: {
    fontSize: theme.fontSizes.size_14,
    color: theme.lightColor.gray,
    marginBottom: theme.verticalSpacing.space_10,
  },
  details: {
    fontSize: theme.fontSizes.size_14,
    color: theme.lightColor.gray,
    marginBottom: theme.verticalSpacing.space_6,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: theme.horizontalSpacing.space_10,
    marginTop: theme.verticalSpacing.space_10,
  },
  acceptButton: {
    backgroundColor: '#0D680D',
    paddingVertical: theme.verticalSpacing.space_8,
    paddingHorizontal: theme.horizontalSpacing.space_20,
    borderRadius: theme.boderRadius.small_4,
  },
  rejectButton: {
    backgroundColor: '#B05C5C',
    paddingVertical: theme.verticalSpacing.space_8,
    paddingHorizontal: theme.horizontalSpacing.space_20,
    borderRadius: theme.boderRadius.small_4,
  },
  shortlistedButton: {
    backgroundColor: '#C8C8C8',
    paddingVertical: theme.verticalSpacing.space_8,
    paddingHorizontal:theme.horizontalSpacing.space_20,
    borderRadius: theme.boderRadius.small_4,
    marginTop: theme.verticalSpacing.space_10,
    width: theme.horizontalSpacing.space_187,
  },
  screnningButton: {
    backgroundColor: '#3E1654',
    paddingVertical: theme.verticalSpacing.space_8,
    paddingHorizontal:theme.horizontalSpacing.space_20,
    borderRadius: theme.boderRadius.small_4,
    marginTop: theme.verticalSpacing.space_10,
    width: theme.horizontalSpacing.space_187,
    textAlign:'center',
    marginHorizontal:'auto'
  },
  screeninginprogressButton: {
    backgroundColor: '#C8C8C8',
    paddingVertical: theme.verticalSpacing.space_8,
    paddingHorizontal: theme.horizontalSpacing.space_20,
    borderRadius: theme.verticalSpacing.space_10,
    marginTop: theme.verticalSpacing.space_10,
    width: theme.horizontalSpacing.space_187,
    textAlign:'center',
    marginHorizontal:'auto'
  },
  rejectedButton: {
    backgroundColor: '#B05C5C',
    paddingVertical: theme.verticalSpacing.space_8,
    paddingHorizontal: theme.horizontalSpacing.space_20,
    borderRadius: theme.verticalSpacing.space_10,
    marginTop: theme.verticalSpacing.space_10,
    width: theme.horizontalSpacing.space_187,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.verticalSpacing.space_10,
    gap: 4,
  },
  bullet:{
    color: theme.lightColor.gray,
    fontSize: theme.fontSizes.size_16
  },
  locationIcon:{
    textAlign:'center',
    marginVertical:'auto'
  },
  cardHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  HorizontalLine: {
    height: theme.verticalSpacing.space_2,
    width: theme.horizontalSpacing.space_230,
    backgroundColor: theme.lightColor.lightGrayColor,
    marginVertical: theme.verticalSpacing.space_16,
  },



  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileRole: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  dropdownToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 14,
    color: '#6200ee',
  },
  dropdownArrow: {
    fontSize: 16,
    color: '#6200ee',
  },
  dropdownContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  roundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  roundInfo: {
    flex: 1,
  },
  roundTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  roundText: {
    fontSize: 12,
    color: '#666',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  scheduleButton: {
    backgroundColor: '#fff',
    borderColor: '#6200ee',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  scheduleButtonText: {
    fontSize: 12,
    color: '#6200ee',
  },
  doneButton: {
    backgroundColor: '#6200ee',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  doneButtonText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default ApplicationScreen;
