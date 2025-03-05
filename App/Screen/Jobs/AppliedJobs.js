import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../Components/Headers/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SearchBar from '../../Components/Searchbar';
import {COLORS} from '../../Constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../Services/Navigation';
import { CommonStyles } from '../../Constants/Styles';
import Pagination from '../../Components/Pagination';

const Jobs = [
  {
    id: '1',
    company: 'apple',
    location: 'Pune, Maharashtra',
    position: 'Project Manager',
    date: 27-12-24,
    salary: '₹80K - ₹85K',
    logo: require('../../Assets/Images/apple.png'),
  },
  {
    id: '2',
    company: 'Figma',
    location: 'Pune, Maharashtra',
    position: 'UI/UX Designer',
    salary: '₹50K - ₹70K',
    logo: require('../../Assets/Images/instagram2.png'),
  },
  {
    id: '2',
    company: 'Figma',
    location: 'Pune, Maharashtra',
    position: 'Projuct Manager',
    salary: '₹50K - ₹70K',
    logo: require('../../Assets/Images/figma.png'),
  },
  {
    id: '2',
    company: 'Figma',
    location: 'Pune, Maharashtra',
    position: 'Projuct Manager',
    salary: '₹50K - ₹70K',
    logo: require('../../Assets/Images/figma.png'),
  },
  {
    id: '2',
    company: 'Figma',
    location: 'Pune, Maharashtra',
    position: 'Projuct Manager',
    salary: '₹50K - ₹70K',
    logo: require('../../Assets/Images/figma.png'),
  },
  {
    id: '2',
    company: 'Figma',
    location: 'Pune, Maharashtra',
    position: 'Projuct Manager',
    salary: '₹50K - ₹70K',
    logo: require('../../Assets/Images/figma.png'),
  },
];

const JobCard = ({job}) => (
  <Pressable onPress={() => NavigationService.navigate('JobDetails')}>
    {/* <LinearGradient
      colors={['#FFF6E6', '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <Image source={job.logo} style={styles.logo} />
        <View>
          <Text style={styles.company}>{job.company}</Text>
          <View style={styles.locationRow}>
            <Icon name="location-outline" size={16} color="#666" />
            <Text style={styles.location}>{job.location}</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.position}>{job.position}</Text>
        <Text style={styles.salary}>Full Time • {job.salary}</Text>
      </View>
    </LinearGradient> */}

    <View style={CommonStyles.card}>
      {/* Job Info Section */}
      <View style={styles.topRow}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={job.logo}
            style={styles.logo}
          />
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>UI/UX Designer</Text>
            <View style={styles.locationRow}>
              <Icon name="map-pin" size={14} color="#888" />
              <Text style={styles.locationText}> Rome, Italy</Text>
              <Text style={styles.salary}> ₹50k-80k/month</Text>
            </View>
          </View>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Full Time</Text>
        </View>
      </View>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <Text style={styles.dateApplied}>Date Applied: 13-09-2024</Text>
        <View style={styles.statusContainer}>
          <Icon name="check-circle" size={14} color="green" />
          <Text style={styles.activeStatus}> Active</Text>
        </View>
        <TouchableOpacity style={styles.statusButton}
         onPress={()=>NavigationService.navigate('ApplicationDetails')}
        >
          <Text style={styles.statusButtonText}>View Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Pressable>
);

const AppliedJobs = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Header greeting={true} />
          <SearchBar />
        </View>

        <View style={styles.alertsHeader}>
          <Text style={styles.alertsTitle}>Applied Jobs (23)</Text>
        </View>
        <Text style={styles.subtitle}>
          Track and manage all your job applications{' '}
        </Text>

        <FlatList
          data={Jobs}
          keyExtractor={item => item.id}
          renderItem={({item}) => <JobCard job={item} />}
        />

         <View>
            <Pagination/>
         </View>

      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundColor,
    paddingBottom:80
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  //   searchContainer: {
  //     flexDirection: 'row',
  //     backgroundColor: '#fff',
  //     padding: 10,
  //     marginHorizontal: 15,
  //     marginTop: -20,
  //     borderRadius: 20,
  //     alignItems: 'center',
  //     elevation: 2,
  //   },
  //   searchIcon: {
  //     marginRight: 10,
  //   },
  //   searchInput: {
  //     flex: 1,
  //     fontSize: 16,
  //   },
  alertsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  alertsTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.text,
  },
  subtitle: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 25,
  },
    card: {
      backgroundColor: COLORS.cardColor,
      padding: 15,
      marginHorizontal: 15,
      marginBottom: 10,
      borderRadius: 10,
      elevation: 2,
    },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  jobDetails: {
    // flex: 1,
    marginLeft: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationText: {
    fontSize: 13,
    color: '#5E6670',
    // color: COLORS.lightText,
  },
  salary: {
    fontSize: 13,
    color: '#666',
    marginLeft: 5,
  },
  tag: {
    backgroundColor: '#E3CFFF',
    borderRadius: 13,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6A1B9A',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  dateApplied: {
    fontSize: 13,
    color: '#666',
    flex: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeStatus: {
    fontSize: 14,
    color: COLORS.green,
    marginLeft: 2,
    fontWeight: '500',
  },
  statusButton: {
    backgroundColor: '#3F1D55',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 18,
  },
  statusButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default AppliedJobs;
