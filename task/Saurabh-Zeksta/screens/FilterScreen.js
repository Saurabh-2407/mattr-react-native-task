import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const FilterScreen = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState('Score');

  const genders = ['MALE', 'FEMALE'];
  const ageRanges = ['20-24', '25-30', '30-40', '40+'];
  const sortByOptions = ['Score', 'Date Joined'];

  const handleGenderPress = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeRangePress = (ageRange) => {
    setSelectedAgeRange(ageRange);
  };

  const handleSortByPress = (sortBy) => {
    setSelectedSortBy(sortBy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.headerText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Filter</Text>
          <TouchableOpacity>
            <Text style={styles.headerText}>Clear All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gender</Text>
          <View style={styles.optionsContainer}>
            {genders.map((gender) => (
              <TouchableOpacity
                key={gender}
                style={[
                  styles.optionButton,
                  selectedGender === gender && styles.optionButtonSelected,
                ]}
                onPress={() => handleGenderPress(gender)}
              >
                <Text
                  style={[
                    styles.optionButtonText,
                    selectedGender === gender && styles.optionButtonTextSelected,
                  ]}
                >
                  {gender}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Age Ranges</Text>
          <View style={styles.optionsContainer}>
            {ageRanges.map((range) => (
              <TouchableOpacity
                key={range}
                style={[
                  styles.optionButton,
                  selectedAgeRange === range && styles.optionButtonSelected,
                ]}
                onPress={() => handleAgeRangePress(range)}
              >
                <Text
                  style={[
                    styles.optionButtonText,
                    selectedAgeRange === range && styles.optionButtonTextSelected,
                  ]}
                >
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sort by</Text>
          <View style={styles.sortByContainer}>
            {sortByOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.sortByOption,
                  selectedSortBy === option && styles.sortByOptionSelected,
                ]}
                onPress={() => handleSortByPress(option)}
              >
                <Text
                  style={[
                    styles.sortByOptionText,
                    selectedSortBy === option && styles.sortByOptionTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    color: '#D81B60',
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    backgroundColor: '#F8BBD0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 4,
  },
  optionButtonSelected: {
    backgroundColor: '#C2185B',
  },
  optionButtonText: {
    color: '#000',
    fontSize: 14,
  },
  optionButtonTextSelected: {
    color: '#fff',
  },
  sortByContainer: {
    flexDirection: 'column',
  },
  sortByOption: {
    backgroundColor: '#F8BBD0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 4,
  },
  sortByOptionSelected: {
    backgroundColor: '#C2185B',
  },
  sortByOptionText: {
    color: '#000',
    fontSize: 16,
  },
  sortByOptionTextSelected: {
    color: '#fff',
  },
  applyButton: {
    backgroundColor: '#D81B60',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    margin: 16,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FilterScreen;
