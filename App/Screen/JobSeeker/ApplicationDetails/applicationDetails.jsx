'use client';

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Collapsible from "react-native-collapsible";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ApplicationDetailsScreen = ({ navigation }) => {
  const [isApplicantInfoCollapsed, setApplicantInfoCollapsed] = useState(true);
  const [isApplicantProgressCollapsed, setApplicantProgressCollapsed] = useState(false);
  const [isSubmittedDocsCollapsed, setSubmittedDocsCollapsed] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Application Details</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Applicant Information */}
        <TouchableOpacity
          style={styles.accordion}
          onPress={() => setApplicantInfoCollapsed(!isApplicantInfoCollapsed)}
        >
          <Text style={styles.accordionText}>Applicant Information</Text>
          <Icon name={isApplicantInfoCollapsed ? "chevron-down" : "chevron-up"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={isApplicantInfoCollapsed}>
          <View style={styles.collapsibleContent}>
            <Text style={styles.contentText}>Name: John Doe</Text>
            <Text style={styles.contentText}>Email: johndoe@example.com</Text>
          </View>
        </Collapsible>

        {/* Applicant Progress */}
        <TouchableOpacity
          style={styles.accordion}
          onPress={() => setApplicantProgressCollapsed(!isApplicantProgressCollapsed)}
        >
          <Text style={styles.accordionText}>Applicant Progress</Text>
          <Icon name={isApplicantProgressCollapsed ? "chevron-down" : "chevron-up"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={isApplicantProgressCollapsed}>
          <View style={styles.collapsibleContent}>
            <Text style={styles.progressTitle}>Your Progress</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressStep}>
                <View style={styles.iconContainer}>
                  <Icon name="checkmark-circle" size={24} color="#7900BA" />
                </View>
                <View style={[styles.progressLine, { backgroundColor: '#7900BA' }]} />
                <Text style={styles.progressText}>Application Submitted</Text>
              </View>

              <View style={styles.progressStep}>
                <View style={styles.iconContainer}>
                  <Icon name="checkmark-circle" size={24} color="#7900BA" />
                </View>
                <View style={[styles.progressLine, { backgroundColor: '#7900BA' }]} />
                <Text style={styles.progressText}>Under Review</Text>
              </View>

              <View style={styles.progressStep}>
                <View style={styles.iconContainer}>
                  <Icon name="ellipse-outline" size={24} color="#7900BA" />
                </View>
                <View style={[styles.progressLine, { backgroundColor: '#7900BA' }]} />
                <Text style={styles.progressText}>Shortlisted / Rejected</Text>
              </View>

              <View style={styles.progressStep}>
                <View style={styles.iconContainer}>
                  <Icon name="ellipse-outline" size={24} color="#7900BA" />
                </View>
                <Text style={styles.progressText}>Interview Scheduled</Text>
              </View>
            </View>
          </View>
        </Collapsible>

        {/* Submitted Documents */}
        <TouchableOpacity
          style={styles.accordion}
          onPress={() => setSubmittedDocsCollapsed(!isSubmittedDocsCollapsed)}
        >
          <Text style={styles.accordionText}>Submitted Documents</Text>
          <Icon name={isSubmittedDocsCollapsed ? "chevron-down" : "chevron-up"} size={20} color="white" />
        </TouchableOpacity>
        <Collapsible collapsed={isSubmittedDocsCollapsed}>
          <View style={styles.collapsibleContent}>
            <Text style={styles.contentText}>Resume: Uploaded</Text>
            <Text style={styles.contentText}>Cover Letter: Uploaded</Text>
          </View>
        </Collapsible>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 4,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginRight: 24, // To offset the back button and center the text
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  accordion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7900BA",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  accordionText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  collapsibleContent: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  contentText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 24,
    color: "#333",
  },
  progressContainer: {
    paddingLeft: 12,
  },
  progressStep: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 32,
    position: "relative",
  },
  iconContainer: {
    backgroundColor: 'white',
    zIndex: 1,
  },
  progressLine: {
    width: 2,
    position: "absolute",
    left: 11,
    top: 24,
    bottom: -32,
  },
  progressText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
});

export default ApplicationDetailsScreen;