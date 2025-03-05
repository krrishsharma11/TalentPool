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


const JobPostSuccessScreen = ({ isVisible,navigation }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Illustration */}
          <Image
            source={require("../../assets/images/Successfull.png")}
            style={styles.image}
          />

          {/* Title */}
          <Text style={styles.title}>🎉 Congratulations,</Text>
          <Text style={styles.title}>Your Job is successfully posted!</Text>

          {/* Description */}
          <Text style={styles.description}>
            You can manage your form in the "my-jobs" section in your dashboard
          </Text>

          {/* View Jobs Button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ViewJobsScreen")}>
            <Text style={styles.buttonText}>View Jobs </Text>
            <Svg.ArrowNext size={16} color="#6C63FF"/>
          </TouchableOpacity>

          {/* Close Button with Cross Icon */}
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate("JobOverviewScreen")}>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginVertical: 16,
  },
  button: {
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

export default JobPostSuccessScreen;

