import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import * as Svg from "../../../Assets/Images/svg";

const JobUpdateScreen = ({ isVisible, navigation, onClose }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Illustration */}
          <Image
            source={require("../../../Assets/Images/Successfull.png")}
            style={styles.image}
          />

          {/* Title */}
          <Text style={styles.title}>🎉 Congratulations,</Text>
          <Text style={styles.title}>Your Job is successfully updated!</Text>

          {/* View Jobs Button */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate("JobOverviewScreen")}
          >
            <Text style={styles.buttonText}>View Updated Job</Text>
            <Svg.ArrowNext size={16} color="#6C63FF"/>
          </TouchableOpacity>

          {/* Close Button with Cross Icon */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Svg.CrossIcon size={24}/>
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
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    width: "100%",
    marginBottom: 8,
  },
  button: {
    marginTop: 40,
    marginBottom: 40,
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
    marginRight: 10,
  },
  closeButton: {
    position: "absolute",
    top: -14,
    right: -14,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default JobUpdateScreen;