import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Svg from '../../../Assets/Images/svg';

const filters = ['Spam', 'Recruiter', 'Unread', 'Starred'];

const messages = [
  {
    id: 1,
    name: 'Harsh Agarwal',
    description: 'Sponsored • Full-stack web development with job assistance',
    day: 'Wed',
    notifications: 1,
    image: 'https://s3-alpha-sig.figma.com/img/9104/90c3/f2cbe93ff5c3e4cf3f3b6091f5d7df68?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=afO8IvYDlfOV7yz0culzToxpngIogrRpj5LuKCktaLEcFaVmySekeocPIY6hpAxK6vWRk8E4GokQiu9Pt0bzUACeuwScbOys3-iuG-HevQs~cnKxSdWYX7mscKxJVyIOsvIO8eDUhLdM-r1Uy9B8-qOrslSiisn0qzzmWF-W0-E8avXdpfkVofEzn8~VyjPnrqtolCwiIWQR604sE2gu3Lkm815lDmGHsD-ry3EcddIjT1TNhbOC62DBIF7-vEhaAKESDrocAY7zcEgWbCADHdNC2QoM3C~KVDNkPzH0kpR2nqFKDLuX9WcjeNn2IQ2dRgbhl0y-XReDWmjosRGgEw__',
  },
  {
    id: 2,
    name: 'Mahesh Pal',
    description: 'Sponsored • Full-stack web development with job assistance',
    day: 'Thu',
    notifications: 0,
    image: 'https://s3-alpha-sig.figma.com/img/4c1d/6fe7/5d06a04f46db17eb48979bfc1daf9563?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dOcmMGCZUaRxzJcldArVxFs9NDSLo8~XTRz7a-D9-BtHMl8aju67dqDTFySp~1gibMYxiPcsp5CmJy10izBbl1Q1MY1juQLYUTOqTyPvub4rvL7BdWT3DzgPewxEBEGr54VVuFdOI8SIYwsYpyP3qzeaJcz1-l23Kq5Qnc~Dtb1CrXJkE~qkctShKzZUY6NA4irfsJfNYrNAFqQdCA4vcf-iN9Z9bDEQApvP8nJO9GiEotA8EfEfgXIpl4CtV8xlu7kltlDVNfi2djHL9BbeXwhy4Sj6Vrq9sxzSx7lNIwPTvvDz9qCW7fUWzCGuc~oLVLCo~DWUlTkU8sIBnvchAg__',
  },
];

const Inbox = ({ navigation }) => {
  const handleComposeMail = () => {
    navigation.navigate('ComposeMail');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Inbox</Text>
        <View style={styles.searchContainer}>
          <Svg.SearchIcon />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Message"
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Filter Chips */}
      <ScrollView style={styles.content}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}
        >
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterChip,
                index === 0 && styles.activeFilter,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  index === 0 && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Messages List */}
        <View style={styles.messagesList}>
          {messages.map((message) => (
        <TouchableOpacity
        key={message.id}
        style={styles.messageItem}
        onPress={() => navigation.navigate('Chat', { name: message.name })}
      >
        <Image source={{ uri: message.image }} style={styles.avatar} />
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.messageName}>{message.name}</Text>
            <Text style={styles.messageDay}>{message.day}</Text>
          </View>
          <Text style={styles.messageDescription}>
            {message.description}
          </Text>
        </View>
        {message.notifications > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>
              {message.notifications}
            </Text>
          </View>
        )}
      </TouchableOpacity>
          ))}
        </View>

        {/* Floating Compose Button */}
        <TouchableOpacity
          onPress={handleComposeMail}
          style={styles.composeButton}
        >
          <Icon name="create-outline" size={24} color="#fff" />
          <Text style={styles.composeButtonText}>Compose</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="mail" size={24} color="#8B3DFF" />
          <Text style={[styles.navText, styles.activeNavText]}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="briefcase-outline" size={24} color="#666" />
          <Text style={styles.navText}>Jobs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  filtersContainer: {
    paddingHorizontal: 10,
  },
  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: '#8B3DFF',
  },
  filterText: {
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  messagesList: {
    padding: 10,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageName: {
    fontWeight: 'bold',
  },
  messageDay: {
    color: '#888',
  },
  messageDescription: {
    color: '#666',
    marginTop: 5,
  },
  notificationBadge: {
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
  },
  composeButton: {
    position: 'absolute',
    bottom: -400, // Fixed at the bottom
    right: 20, // Stays at the bottom-right corner
    backgroundColor: '#8B3DFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 10, // Ensure it's on top of other elements
  },
  
  composeButtonText: {
    color: '#fff',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  activeNavText: {
    color: '#8B3DFF',
  },
  sendButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8B3DFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
});

export default Inbox;
