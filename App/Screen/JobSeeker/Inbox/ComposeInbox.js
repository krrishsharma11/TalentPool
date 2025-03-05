import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Dropdown = ({ label, selectedValue, setSelectedValue, options }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{selectedValue}</Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setSelectedValue(item);
                    setModalVisible(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ComposeInbox = ({ navigation }) => {
  const [location, setLocation] = useState("Nagpur, Maharashtra, India");
  const [designation, setDesignation] = useState("UI/UX Designer");
  const [company, setCompany] = useState("Talent Rise Technokrate");
  const [experience, setExperience] = useState("Senior Level");

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search People" />

      <Text style={styles.title}>Filter</Text>

      <Dropdown
        label="Person Location"
        selectedValue={location}
        setSelectedValue={setLocation}
        options={["Nagpur, Maharashtra, India", "Mumbai, Maharashtra, India"]}
      />

      <Dropdown
        label="Person Designation"
        selectedValue={designation}
        setSelectedValue={setDesignation}
        options={["UI/UX Designer", "Software Engineer"]}
      />

      <Dropdown
        label="Person Company"
        selectedValue={company}
        setSelectedValue={setCompany}
        options={["Talent Rise Technokrate", "Google"]}
      />

      <Dropdown
        label="Person Experience"
        selectedValue={experience}
        setSelectedValue={setExperience}
        options={["Senior Level", "Mid Level"]}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply Filter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ navigation.navigate("ComposeMessage")} style={styles.button}>
        <Text style={styles.buttonText}>Search Candinates</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
      >
        <Tab.Screen
          name="Home"
          component={ComposeInbox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={ComposeInbox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="chatbubble-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Compose"
          component={ComposeInbox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="send-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ComposeInbox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={ComposeInbox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="briefcase-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#8134AF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  closeButton: {
    backgroundColor: "#6200ea",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ComposeInbox;
