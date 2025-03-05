import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import CustomDropDownTextInput from '../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import { theme } from '../../utils'; 
import * as Svg from '../../assets/images/svg'; 
import CustomHeader from '../../reusableComponents/appHeader/customHeader';
import CustomTextInput from '../../reusableComponents/customTextInput/customTextInput';

const EditJobScreen = ({navigation}) => {
  

  const dropdownData = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleUpdatePress = () => {
    navigation.navigate('NextPage'); // Navigate to the next page
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Left: Menu Icon & Company Logo */}
        <View style={styles.headerLeft}>
          <Svg.MenuIcon color="#000" size={28} />
          <Image source={require('../../assets/images/technoKrate.png')} style={styles.logo} />
        </View>

        {/* Right: Bell Icon & Infosys Title */}
        <View style={styles.headerRight}>
          <Svg.BellIcon1 color="#000" size={26} />
          <Image source={require('../../assets/images/InfosysTitle.png')} />
        </View>
      </View>

      <View style={styles.containers}>
        {/* Custom Header */}
        <CustomHeader
          title="Edit Job"
          leftIcon={<Svg.ArrowBack/>}
          onLeftPress={() => navigation.navigate('JobOverviewScreen')}
          rightIcon={undefined}
          onRightPress={undefined}
        />

        {/* Form */}
        <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
          <CustomTextInput placeholder="Job Title: Add job title, role, vacancies etc" style={styles.input} />
          <CustomTextInput placeholder="Tags: Job keyword, tags etc..." style={styles.input} />

          {/* Disabled Role dropdown */}
          <CustomDropDownTextInput
            placeholder="Role: Select"
            data={dropdownData}
            value={null}
            onChange={() => { }}
            style={styles.input}
            disabled={true} // Disable dropdown
          />

          <Text style={styles.placeholderColor}>Salary Range</Text>
          <View style={styles.salaryRange}>
            <CustomTextInput placeholder="Min Salary" style={styles.salaryInput} />
            <CustomTextInput placeholder="Max Salary" style={styles.salaryInput} />
          </View>

          <Text style={styles.placeholder}>Education</Text>
          <CustomDropDownTextInput
            placeholder="Select"
            data={dropdownData}
            value={null}
            onChange={() => { }}
            style={styles.input}
            disabled={true} // Disable dropdown
          />

          <Text style={styles.placeholderColor}>Experience</Text>
          <CustomDropDownTextInput
            placeholder="Select"
            data={dropdownData}
            value={null}
            onChange={() => { }}
            style={styles.input}
            disabled={true} // Disable dropdown
          />

          <View style={styles.row}>
            <CustomDropDownTextInput
              placeholder="Job Type"
              data={dropdownData}
              value={null}
              onChange={() => { }}
              style={[styles.input, styles.halfInput]}
              disabled={true} // Disable dropdown
            />
            <CustomDropDownTextInput
              placeholder="Location"
              data={dropdownData}
              value={null}
              onChange={() => { }}
              style={[styles.input, styles.halfInput]}
              disabled={true} // Disable dropdown
            />
          </View>

          <View style={styles.skillsRow}>
            <Text style={styles.skillsLabel}>Skills</Text>
            {/* Types of Skills */}
            <View style={styles.skillsContainer}>
              <View style={styles.skillBadge}>
                <Text style={styles.skillBadgeText}>Python</Text>
              </View>
              <View style={styles.skillBadge}>
                <Text style={styles.skillBadgeText}>DSA</Text>
              </View>
              <View style={styles.skillBadge}>
                <Text style={styles.skillBadgeText}>PHP</Text>
              </View>
            </View>
            /</View>

          <Text style={styles.placeholderColor}>Job Description</Text>
          <CustomTextInput
            placeholder="Add a Job Description"
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
          />

          <Text style={styles.placeholderColor}>Responsibilities</Text>
          <CustomTextInput
            placeholder="Add your Job Responsibilities"
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
          />
        </ScrollView>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={() => navigation.navigate('JobUpdateScreen')}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  formContainer: {
    paddingHorizontal: theme.horizontalSpacing.space_12,
    paddingVertical: theme.verticalSpacing.space_10,
  },
  input: {
    marginBottom: theme.verticalSpacing.space_10,
  },
  salaryRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salaryInput: {
    flex: 0.48,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  skillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.verticalSpacing.space_10,
    backgroundColor: '#F7F8F9',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: theme.lightColor.gray,
    paddingHorizontal: theme.horizontalSpacing.space_12,
    height: theme.verticalSpacing.space_56,
    marginTop: theme.verticalSpacing.space_10
  },
  skillsLabel: {
    fontSize: 16,
    color: 'rgba(131, 145, 161, 1)',
    marginRight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.56)', // Background with specified RGBA color
    width: 77, // Fixed width
    height: 31, // Fixed height
    borderRadius: 8, // Rounded corners
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginBottom: 4,
    marginTop: 4,
  },

  skillBadgeText: {
    color: '#FFF', // White text for contrast
    fontSize: 13, // Font size for better readability
    fontWeight: '500', // Bold text
    textAlign: 'center', // Center align the text horizontally
  },
  textArea: {
    height: theme.verticalSpacing.space_100,
    textAlignVertical: 'top',
  },
  updateButton: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 48,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderColor: {
    fontSize: theme.fontSizes.size_14,
    color: 'rgba(131, 145, 161, 1)',
    //color: theme.darkModeColor.blackColor,
    marginBottom: theme.verticalSpacing.space_4,
  },
  placeholder: {
    fontSize: theme.fontSizes.size_14,
    color: 'rgba(131, 145, 161, 1)',
    marginTop: theme.verticalSpacing.space_6,
  },
});

export default EditJobScreen;
