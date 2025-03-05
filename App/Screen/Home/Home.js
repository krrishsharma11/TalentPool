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
import Header from '../../Components/Headers/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SearchBar from '../../Components/Searchbar';
import {COLORS} from '../../Constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../Services/Navigation';

const jobAlerts = [
  {
    id: '1',
    company: 'Reddit',
    location: 'Pune, Maharashtra',
    position: 'Sr. UI/UX Designer',
    salary: '₹80K - ₹85K',
    logo: require('../../Assets/Images/reddit.png'),
  },
  {
    id: '2',
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
      colors={[COLORS.cardColor, '#FFFFFF']}
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
    </LinearGradient>
  </Pressable>
);

const Home = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Header />
          <SearchBar />
        </View>

        {/* Job Alerts Section */}
        <View style={styles.alertsHeader}>
          <Text style={styles.alertsTitle}>Job Alerts (2)</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditJobAlert')}>
            <Text style={styles.editAlerts}>✏️ Edit Job Alerts</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>
          Stay updated with personalized job notifications
        </Text>

        {/* Job List */}
        <FlatList
          data={jobAlerts}
          keyExtractor={item => item.id}
          renderItem={({item}) => <JobCard job={item} />}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  alertsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  editAlerts: {
    color: '#7D47F1',
    fontSize: 14,
  },
  subtitle: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 25,
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
    marginTop: 3,
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

export default Home;
