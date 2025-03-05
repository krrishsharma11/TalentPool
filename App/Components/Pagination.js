import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;

  const handlePress = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress(activePage - 1)}>
        <Icon name="chevron-left" size={24} color="#A084E8" />
      </TouchableOpacity>
      
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <TouchableOpacity key={pageNumber} onPress={() => handlePress(pageNumber)}>
            <View style={[styles.page, 
              activePage === pageNumber && styles.activePage,
              pageNumber === 4 && styles.highlightedPage
            ]}>
              <Text style={[styles.pageText, activePage === pageNumber && styles.activeText]}>
                {pageNumber.toString().padStart(2, '0')}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      
      <TouchableOpacity onPress={() => handlePress(activePage + 1)}>
        <View style={styles.nextButton}>
          <Icon name="chevron-right" size={24} color="#A084E8" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  page: {
    marginHorizontal: 8,
    padding: 8,
  },
  activePage: {
    backgroundColor: '#3D1E58',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  highlightedPage: {
    backgroundColor: '#E1C4F3',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pageText: {
    fontSize: 14,
    color: '#333',
  },
  activeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#E1C4F3',
    borderRadius: 20,
    padding: 8,
  },
});

export default Pagination;
