import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import data from '../assets/data.json';

const FilterScreen = ({ navigation }) => {
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

  const applyFilters = () => {
    let filteredConnections = data.map((item) => ({
      name: `${item.first_name} ${item.last_name}`,
      age: new Date().getFullYear() - new Date(item.dob.split('/').reverse().join('-')).getFullYear(),
      location: `${item.location.city}, ${item.location.country}`,
      topMatch: item.score > 50,
      image: item.photos[0].path,
      user: item,
      gender: item.gender,
      score: item.score,
      created_at: item.created_at,
    }));

    if (selectedGender) {
      filteredConnections = filteredConnections.filter(connection => connection.gender.toUpperCase() === selectedGender);
    }

    if (selectedAgeRange) {
      const [minAge, maxAge] = selectedAgeRange.split('-').map(Number);
      filteredConnections = filteredConnections.filter(connection => connection.age >= minAge && (maxAge ? connection.age <= maxAge : true));
    }

    if (selectedSortBy === 'Score') {
      filteredConnections.sort((a, b) => b.score - a.score);
    } else if (selectedSortBy === 'Date Joined') {
      filteredConnections.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    navigation.navigate('Home', { filteredConnections });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.inactiveHeaderText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.activeHeaderText}>Filter</Text>
        <TouchableOpacity onPress={() => {
          setSelectedGender(null);
          setSelectedAgeRange(null);
          setSelectedSortBy('Score');
        }}>
          <Text style={styles.inactiveHeaderText}>Clear All</Text>
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

      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  activeHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  inactiveHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  optionButton: {
    padding: 6,
    borderWidth: 1,
    borderColor: '#E91E63',
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 30,
    paddingHorizontal: 20,
    backgroundColor:'#ffe3fc'
  },
  optionButtonSelected: {
    backgroundColor: '#E91E63',
  },
  optionButtonText: {
    color: '#E91E63',
  },
  optionButtonTextSelected: {
    color: 'white',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    overflow: 'hidden',
    borderRadius: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  applyButton: {
    paddingVertical: 15,
    backgroundColor: '#E91E63',
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default FilterScreen;
