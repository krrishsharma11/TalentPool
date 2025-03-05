import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../utils';

const ProfileCompletionCard = ({ percentage =5,onPress }) => {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100); // Clamp percentage between 0 and 100
  const rotation = (normalizedPercentage / 100) * 360; // Calculate rotation degrees


  const getBorderColor = (percent) => {
    if (percent < 50) return '#B47AD4'; 
    if (percent < 75) return '#B47AD4'; 
    return '#28B463'; 
  };

  const dynamicBorderColor = getBorderColor(normalizedPercentage);

  return (
    <View style={styles.card}>
      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Your profile editing is not completed.</Text>
        <TouchableOpacity style={styles.button}
        onPress={onPress}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Circular Progress Section */}
      <View style={styles.progressContainer}>
        <View style={styles.outerCircle}>
          {/* Background Circle */}
          <View
            style={[
              styles.backgroundCircle,
              { borderColor: dynamicBorderColor }, // Dynamic border color
            ]}
          />
          {/* Foreground (Progress) */}
          <View
            style={[
              styles.progressOverlay,
              { borderColor: dynamicBorderColor }, // Dynamic border color
              {
                transform: [{ rotate: `${rotation}deg` }],
              },
            ]}
          />
          {/* Mask to clip progress */}
          <View style={styles.innerMask}>
            <View
              style={[
                styles.innerCircle,
                { borderColor: dynamicBorderColor }, // Dynamic border color
              ]}
            >
              <Text style={styles.percentageText}>{normalizedPercentage}%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F6E9FF',
    borderRadius: 10,
   elevation:3,
    
    marginTop:30,
    marginHorizontal:theme.horizontalSpacing.space_14
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  heading: {
    fontSize:theme.fontSizes.size_16,
    color: '#333',
    marginBottom: 8,
    fontWeight:'400'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal:theme.horizontalSpacing.space_12,
    borderRadius: 6,
  width:theme.horizontalSpacing.space_100
   
  },
  buttonText: {
    fontSize:theme.fontSizes.size_14,
    color: '#9857CF',
    marginRight: 8,
    fontWeight:'500'
  },
  arrow: {
    fontSize:theme.fontSizes.size_16,
    color: '#9857CF',
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  outerCircle: {
    width:theme.horizontalSpacing.space_74,
    height:theme.verticalSpacing.space_76,
    borderRadius:45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderColor:'#9857CF',
    
  },
  backgroundCircle: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 50,
    borderWidth:5,
    borderColor: '#E0E0E0', // Placeholder color
  },
  progressOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'transparent', // This will be dynamically updated
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  innerMask: {
    position: 'absolute',
    width: theme.horizontalSpacing.space_70,
    height:theme.verticalSpacing.space_70,
    borderRadius:35,
    backgroundColor: '#F6E9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
    borderColor:"#B47AD4"
    
  },
  innerCircle: {
    width:theme.horizontalSpacing.space_60,
    height:theme.verticalSpacing.space_58,
    borderRadius:30,
    borderWidth:5,
    borderColor: '#E0E0E0', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6E9FF',
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9857CF',
  },
});

export default ProfileCompletionCard;
