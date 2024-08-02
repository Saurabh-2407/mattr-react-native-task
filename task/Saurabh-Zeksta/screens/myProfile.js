import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import data from '../assets/data.json';

const { height } = Dimensions.get('window');

const MyProfile = () => {
  const user = data.find(user => user.id === 2);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: user.photos[0].path }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{`${user.first_name} ${user.last_name}, ${new Date().getFullYear() - new Date(user.dob.split('/').reverse().join('-')).getFullYear()}`}</Text>
        <Text style={styles.location}>{`${user.location.city}, ${user.location.country}`}</Text>
        <Text style={styles.description}>{user.bio}</Text>
        <Text style={styles.interestText}>Interests</Text>
        <View style={styles.interestRow}>
          {user.interests.map((interest) => (
            <View key={interest.id} style={styles.interestCol}>
              <Text style={styles.interest}>{interest.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: height / 2,
  },
  details: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '400',
  },
  description: {
    paddingVertical: 20,
    fontSize: 14,
  },
  interestText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  interestRow: {
    flexDirection: 'row',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  interestCol: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 3,
    backgroundColor: '#ce1694',
    borderRadius: 15,
  },
  interest: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 11,
  },
});

export default MyProfile;
