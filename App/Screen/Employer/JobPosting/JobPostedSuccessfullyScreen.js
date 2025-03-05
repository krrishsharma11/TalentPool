import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import * as Svg from "../../assets/images/svg";



const JobPostedSuccessfullyScreen = ({ isVisible,navigation }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Illustration */}
          <Image
            source={require("../../assets/images/Successfull1.png")}
            style={styles.image}
          />

          {/* Title */}
          <Text style={styles.title}>🎉 Job Posted Successfully!</Text>

         <View style={styles.buttons}>
          {/* View Jobs Button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ViewJobsScreen")}>
            <Text style={styles.buttonText}>View Job Listing</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PostJobScreen")}>
            <Text style={styles.buttonText}>Post Another Job</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ShareJobScreen")}>
            <Text style={styles.buttonText}>Share Job</Text>
          </TouchableOpacity>
          </View>

          {/* Close Button with Cross Icon */}
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate("EditJobScreen")}>
            <Svg.CrossIcon size={48}/>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    width: "80%",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
    marginTop:30,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    width:308,
    marginBottom:20,
  },
    buttons: {
      marginTop: 4, 
      marginBottom: 4, 
    },
    button: {
      marginTop: 8, 
      marginBottom: 8, 
      backgroundColor: "white",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#6C63FF",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  buttonText: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight:10,
  },
  closeButton: {
    position: "absolute",
    top: -14, 
    right: -14, 
    width: 40, 
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
    borderRadius: 20, 
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default JobPostedSuccessfullyScreen;