import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

const UserProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/pexels-pixabay-33109.jpg')} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>Frank Stark, 23</Text>
        <Text style={styles.location}>London, United Kingdom</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
        <Text style={styles.interestText}>Interests</Text>
        <View style={styles.interestRow}>
          <View style={styles.interestCol}>
            <Text style={styles.interest}>Running</Text>
          </View>
          <View style={styles.interestCol}>
            <Text style={styles.interest}>Hiking</Text>
          </View>
          <View style={styles.interestCol}>
            <Text style={styles.interest}>Outdoors</Text>
          </View>
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

export default UserProfile;