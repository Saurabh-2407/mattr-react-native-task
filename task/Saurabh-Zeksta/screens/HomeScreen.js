import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ConnectionCard from '../components/ConnectionCard';

const HomeScreen = () => {
  const connections = [
    { name: 'Frank Stark', age: 23, location: 'London, United Kingdom', topMatch: true },
    { name: 'Andreea Miles', age: 26, location: 'London, United Kingdom', topMatch: false },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Connections</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.refreshButton}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {connections.map((connection, index) => (
          <ConnectionCard key={index} {...connection} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 10,
  },
  filterButtonText: {
    color: '#E91E63',
  },
  refreshButton: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E91E63',
    borderRadius: 5,
    alignSelf: 'center',
  },
  refreshButtonText: {
    color: '#E91E63',
  },
  scrollView: {
    paddingBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E91E63',
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    color: '#E91E63',
  },
});

export default HomeScreen;
