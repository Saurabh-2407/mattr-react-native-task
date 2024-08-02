import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ConnectionCard = ({ name, age, location, topMatch, image, navigation, user }) => {
  return (
    <View style={styles.card}>
      {topMatch && <Text style={styles.topMatch}>TOP MATCH</Text>}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}, {age}</Text>
        <Text style={styles.location}>{location}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('UserProfile', { user })}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      marginVertical: 10,
      width: Dimensions.get('window').width - 40,
      alignSelf: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#e6ede8',
    },
  
  topMatch: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#E91E63',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
    zIndex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#E91E63',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#E91E63',
    marginBottom: 15,
  },
  button: {
    borderColor: '#E91E63',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#E91E63',
    fontSize: 14,
  },
});

export default ConnectionCard;
