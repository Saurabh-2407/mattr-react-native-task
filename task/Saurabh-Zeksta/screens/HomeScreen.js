import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ConnectionCard from '../components/ConnectionCard';
import data from '../assets/data.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const allConnections = data.map((item) => ({
    name: `${item.first_name} ${item.last_name}`,
    age: new Date().getFullYear() - new Date(item.dob.split('/').reverse().join('-')).getFullYear(),
    location: `${item.location.city}, ${item.location.country}`,
    topMatch: item.score > 50,
    image: item.photos[0].path,
    user: item,
  }));

  const [connections, setConnections] = useState([]);

  const getRandomConnections = () => {
    const shuffled = [...allConnections].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    setConnections(getRandomConnections());
  }, []);

  const handleRefresh = () => {
    setConnections(getRandomConnections());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Connections</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('Filter')}
        >
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {connections.map((connection, index) => (
          <ConnectionCard
            key={index}
            {...connection}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="explore" size={24} color="#E91E63" />
          <Text style={styles.footerButtonText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('MyProfile')}
        >
          <Icon name="person" size={24} color="#E91E63" />
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
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
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
    borderColor: '#E91E63',
  },
  footerButton: {
    padding: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#E91E63',
    marginTop: 5,
  },
});

export default HomeScreen;
