import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height } = Dimensions.get('window');

const UserProfile = ({ route }) => {
  const { user } = route.params;
  const [isFavorite, setIsFavorite] = useState(false); // State to manage the heart icon color

  const handleHeartPress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {user.photos.map((photo, index) => (
            <Image key={index} source={{ uri: photo.path }} style={styles.image} />
          ))}
        </ScrollView>
  
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{user.first_name} {user.last_name}, {new Date().getFullYear() - new Date(user.dob.split('/').reverse().join('-')).getFullYear()}</Text>
        <TouchableOpacity style={styles.heartIcon} onPress={handleHeartPress}>
          <Icon name="favorite" size={30} color={isFavorite ? 'red' : 'pink'} />
        </TouchableOpacity>
        <Text style={styles.location}>{user.location.city}, {user.location.country}</Text>
        <Text style={styles.description}>
          {user.bio || 'No description provided.'}
        </Text>
        <Text style={styles.interestText}>Interests</Text>
        <View style={styles.interestRow}>
          {user.interests && user.interests.length > 0 ? (
            user.interests.map((interest, index) => (
              <View key={index} style={styles.interestCol}>
                <Text style={styles.interest}>{interest.name}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noInterests}>No interests listed.</Text>
          )}
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
  imageWrapper: {
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: height / 2,
  },
  image: {
    width: Dimensions.get('window').width,
    height: height / 2,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
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
  noInterests: {
    fontSize: 14,
    color: 'grey',
  },
});

export default UserProfile;
