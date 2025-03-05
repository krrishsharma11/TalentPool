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
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../Components/Headers/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from '../../Constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../Services/Navigation';

const currInterviews = [
  {
    id: '1',
    company: 'Reddit',
    location: 'Pune, Maharashtra',
    position: 'Sr. UI/UX Designer',
    salary: '₹80K - ₹85K',
    logo: require('../../Assets/Images/reddit.png'),
    timeStamp:"10:00 Am",
  },
];

const Upcomming = [
  {
    id: '2',
    company: 'Figma',
    location: 'Pune, Maharashtra',
    position: 'UI/UX Designer',
    salary: '₹50K - ₹70K',
    logo: require('../../Assets/Images/figma.png'),
  },

  {
    id: '3',
    company: 'Figma',
    location: 'Pune, Maharashtra',
    position: 'UI/UX Designer',
    salary: '₹50K - ₹70K',
    logo: require('../../Assets/Images/figma.png'),
  },
  
];

const JobCard = ({job}) => (
  <Pressable onPress={() => NavigationService.navigate('JobDetails')}>
    <LinearGradient
      // colors={['#FFF6E6', '#FFFFFF']}
      colors={['#FFF7E7', '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.card}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
        <View style={{flexDirection: 'row', columnGap: 5}}>
          <FeatherIcon name="clock" size={16} color="#666666" />
          <Text style={{color: '#666666'}}>10:00 AM</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.position}>{job.position}</Text>
          <Text style={styles.salary}>Full Time • {job.salary}</Text>
        </View>
        <View>
          <Text style={{...styles.position}}>Scheduled at</Text>
          <View style={{flexDirection: 'row', columnGap: 7, marginTop: 8}}>
            <FeatherIcon name="calendar" size={22} color="#666666" />
            <Text style={{...styles.salary, color: '#2C292ED9', marginTop: 0}}>
              27-11-2024
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  </Pressable>
);

const Interviews = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Header greeting={true}/>
        </View>

        {/* Interview Section */}
        <View>
          <View style={styles.alertsHeader}>
            <Text style={styles.alertsTitle}>Interviews (1)</Text>
          </View>
          <Text style={styles.subtitle}>
            Review your upcoming interviews and stay prepared to shine!{' '}
          </Text>
          {/* Job List */}
          <FlatList
            data={currInterviews}
            keyExtractor={item => item.id}
            renderItem={({item}) => <JobCard job={item} />}
          />
        </View>

        {/* Upcomming */}
        <View>
          <View style={styles.alertsHeader}>
            <Text style={styles.alertsTitle}>Upcoming (1)</Text>
          </View>
          {/* <Text style={styles.subtitle}>
            Review your upcoming interviews and stay prepared to shine!{' '}
          </Text> */}
          <View style={{marginTop:20}}>
            <FlatList
              data={Upcomming}
              keyExtractor={item => item.id}
              renderItem={({item}) => <JobCard job={item} />}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundColor,
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 15,
    marginTop: -20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  alertsHeader: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  alertsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text,
  },

  subtitle: {
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#767F8C',
    marginTop: 5,
    marginBottom: 25,
    lineHeight: 24,
  },
  card: {
    // backgroundColor: '#FFF6E6',
    padding: 25,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 5,
    marginRight: 10,
  },
  company: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191C',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: COLORS.lightText,
    marginLeft: 3,
  },
  position: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.regularText,
    marginTop: 5,
  },
  salary: {
    fontSize: 14,
    color: '#2C292E',
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 15,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  centerButton: {
    backgroundColor: '#7D47F1',
    padding: 12,
    borderRadius: 30,
  },
});

export default Interviews;
