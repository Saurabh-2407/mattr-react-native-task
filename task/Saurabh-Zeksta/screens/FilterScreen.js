import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Filter</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
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
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedSortBy}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedSortBy(itemValue)}
              >
                {sortByOptions.map((option) => (
                  <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    color: '#D81B60',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    marginTop: 20,
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
  pickerContainer: {
    borderColor: '#F8BBD0',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  applyButton: {
    backgroundColor: '#D81B60',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 16,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FilterScreen;
