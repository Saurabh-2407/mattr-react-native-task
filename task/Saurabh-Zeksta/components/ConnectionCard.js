import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ConnectionCard = ({ name, age, location, topMatch }) => {
  return (
    <View style={styles.card}>
      {topMatch && <Text style={styles.topMatch}>TOP MATCH</Text>}
      <View style={styles.imageContainer}>
        {/* <Image source={require('../assets/images/placeholder.png')} style={styles.image} /> */}
      </View>
      <Text style={styles.name}>{name}, {age}</Text>
      <Text style={styles.location}>{location}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E91E63',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
    alignItems: 'center',
    position: 'relative'
  },
  topMatch: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
  },
  imageContainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
    marginBottom: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  name: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: 'white',
    marginBottom: 15,
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ConnectionCard;
