import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Svg from '../../../Assets/Images/svg'; 
import { theme } from "../../../utils";

const JobCard = ({ title, count, backgroundImage, topRightImage, color, onPress }) => {
  return (
    <>
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      {/* Top-right small Image or SVG */}
      {topRightImage ? (
        <Image source={topRightImage} style={styles.topRightImage} />
      ) : (
        <View style={styles.topRightIconContainer}>
          <Svg.DotIcon />
        </View>
      )}

      {/* Background watermark Image */}
      {backgroundImage && <Image source={backgroundImage} style={styles.backgroundImage} />}
      
      <Text style={styles.countText}>{count}</Text>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.viewText}>View</Text>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: theme.horizontalSpacing.space_156,
    height: theme.verticalSpacing.space_165,
    borderRadius: 15,
    padding: 15,
    // marginHorizontal: 5,
    // justifyContent: "space-between",
    overflow: "hidden",
    elevation: 2,
    // marginTop:theme.verticalSpacing.space_100
    
  },
  topRightImage: {
    position: "absolute",
    top: theme.verticalSpacing.space_10,
    right: theme.horizontalSpacing.space_10,
    width: theme.horizontalSpacing.space_20,
    height: theme.verticalSpacing.space_20,
    resizeMode: "contain",
  },
  topRightIconContainer: {
    position: "absolute",
    top: theme.verticalSpacing.space_10,
    right: theme.horizontalSpacing.space_10,
    width: theme.horizontalSpacing.space_20, 
    height: theme.verticalSpacing.space_20,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: "absolute",
    bottom:-10,
    right:-15,
    width:theme.horizontalSpacing.space_110,
    height:theme.verticalSpacing.space_114,
    resizeMode: 'contain',
    // opacity: 0.3,
  },
  countText: {
    fontSize: theme.fontSizes.size_36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: theme.verticalSpacing.space_10,
  },
  titleText: {
    fontSize: theme.fontSizes.size_14,
    color: "#fff",
    fontWeight: "500",
    marginVertical:10,
  },
viewText: {
    fontSize: theme.fontSizes.size_14,
    color: '#A6A6A6',
    marginTop:theme.verticalSpacing.space_20,
    fontSize:theme.fontSizes.size_16
  },
});

export default JobCard;
