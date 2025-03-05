import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../Constants/Colors';
import NavigationService from '../../Services/Navigation';

const Chat = ({navigation}) => {
  const [newMessage, setNewMessage] = useState([
    {
      id: 1,
      text: 'I came across your profile and was impressed by your expertise in Designing. I’m currently exploring opportunities in UI/UX Designing and would love to connect and learn from your insights.',
      isSent: false,
    },
  ]);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const messages = [
    {id: 1, text: 'Hi, how are you today?', isSent: true},
    {id: 2, text: 'Doing good, I need help with Something', isSent: false},
    {id: 3, text: 'Hi, how are you today?', isSent: true},
    {id: 4, text: 'Doing good, I need help with Something', isSent: false},
    {id: 5, text: 'Hi, how are you today?', isSent: true},
    {id: 6, text: 'Doing good, I need help with Something', isSent: false},
  ];

  const [inputText, setInputText] = useState('');

  const sendMessage = (Navigation) => {
    // setIsMessageSent(!isMessageSent);
    // if (inputText.trim()) {
    //   //   setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: 'me' }]);
    //   setInputText('');
    // }
    // navigation.navigate('AppStack');
    NavigationService.navigate('BottomTab');
  };

  const renderMessage = ({item}) => (
    <View
      style={[
        styles.messageBubble,
        !item.isSent ? styles.sentMessage : styles.receivedMessage,
      ]}>
      <Text
        style={{
          ...styles.messageText,
          color: !item.isSent ? 'white' : 'black',
        }}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        {/* <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.userName}>Saroj Verma</Text>
          <View style={styles.statusContainer}>
            <Icon name="smartphone" size={14} color="#666" />
            <Text style={styles.statusText}> • 2h ago</Text>
          </View>
          <Text style={styles.jobTitle}>UI/UX Designer</Text>
          <Text style={styles.company}>Talentrise Technokrate Pvt Ltd</Text>
          <Text style={styles.location}>Nagpur, Maharashtra, India</Text>
        </View>
        <Text style={styles.date}>28 July 2024</Text>
      </View> */}

        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View style={{marginTop: 50}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image
              source={require('../../Assets/Icons/profile.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Saroj Verma</Text>
              <Text style={styles.profileStatus}>
                <Ionicons name="ellipse" size={10} color="green" /> Mobile • 2h
                ago
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="star-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.topSection}>
        <Text style={styles.jobTitle}>UI/UX Designer</Text>
        <Text style={styles.companyName}>Talentrise Technokrate Pvt Ltd</Text>
        <Text style={styles.location}>Nagpur, Maharashtra, India</Text>
        <View style={styles.dateContainer}>
          <View style={styles.line} />
          <Text style={styles.date}>28 July 2024</Text>
          <View style={styles.line} />
        </View>
      </View>

      {/* Messages List */}
      <FlatList
        data={isMessageSent ? newMessage : messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input and Tab Bar */}

      {isMessageSent && <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignSelf: 'center',
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          style={styles.suggestedTextBtn}>
          <Text style={{fontSize: 16}}> Hello, Nice to meet you</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.suggestedTextBtn}>
          <Text style={{fontSize: 16}}> Greetings...</Text>
        </TouchableOpacity>
      </View>}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Message..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View> */}

        <View style={styles.sendContainer}>
          <View style={styles.inputContainer}>
            <Icon2
              name="image-outline"
              size={20}
              color="#9C27B0"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={text => setInputText(text)}
              placeholder="Enter your Message....."
              placeholderTextColor="#A0A0A0"
            />
            <Icon2
              name="microphone-outline"
              size={20}
              color="#9C27B0"
              style={styles.icon}
            />
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Icon name="send" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-between',
  },
  profileImage: {width: 40, height: 40, borderRadius: 20, marginHorizontal: 10},
  profileDetails: {flex: 1},
  profileName: {fontSize: 16, fontWeight: 'bold'},
  profileStatus: {
    fontSize: 12,
    color: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
  },

  topSection: {
    padding: 10,
    // alignItems: 'center',
  },
  jobTitle: {
    fontSize: 16,
    // fontWeight: '500',
    color: '#333',
  },
  companyName: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  date: {
    fontSize: 12,
    color: '#555',
  },

  messagesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: 12,
    padding: 12,
    paddingBottom: 20,
    marginVertical: 4,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    // backgroundColor: '#DCF8C6',
    backgroundColor: COLORS.primaryThemeColor,
    minHeight: 55,
    paddingVertical: 5,
    borderTopRightRadius: 0,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8E8E8',
    minHeight: 55,
    paddingVertical: 10,
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: 16,
    fontSize: 16,
  },

  sendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },

  suggestedTextBtn: {
    padding: 5,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: COLORS.primaryThemeColor,
    borderWidth: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5F5F5',
    // borderRadius: 25,
    paddingHorizontal: 10,
    height: 55,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    paddingHorizontal: 10,
  },
  icon: {
    paddingHorizontal: 5,
  },
  sendButton: {
    backgroundColor: '#9C27B0',
    width: 55,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default Chat;
