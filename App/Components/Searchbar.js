import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} color="#8E8E8E" style={styles.searchIcon} />
      <TextInput placeholder="Search job here..." placeholderTextColor="#8E8E8E" style={styles.searchInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 18,
    marginTop: -15, // Adjust position
    elevation: 5, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius:5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
