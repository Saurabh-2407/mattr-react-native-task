import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../assets/data.json';

const { height } = Dimensions.get('window');

const MyProfile = ({ navigation }) => {
  const user = data.find(user => user.id === 2);

  const handleClosePress = () => {
    navigation.navigate('Home'); // Navigate to the home page
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: user.photos[0].path }} style={styles.image} />
        <TouchableOpacity style={styles.closeIcon} onPress={handleClosePress}>
          <Icon name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>
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
    marginTop: 30,
    flex: 1,
    backgroundColor: 'white',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: height / 2,
  },
  closeIcon: {
    marginTop:20,
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 1,
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
