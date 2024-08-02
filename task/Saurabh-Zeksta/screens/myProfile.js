import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import data from "../assets/data.json";
import Footer from "../components/Footer";

const { height, width } = Dimensions.get("window");

const MyProfile = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const user = data.find((user) => user.id === 2);

  const handleClosePress = () => {
    navigation.navigate("Home"); // Navigate to the home page
  };

  const handleScroll = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentImageIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <ScrollView
            horizontal
            pagingEnabled
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={styles.imageContainer}
          >
            {user.photos.map((photo, index) => (
              <Image
                key={index}
                source={{ uri: photo.path }}
                style={styles.image}
              />
            ))}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {user.photos.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentImageIndex && styles.indicatorActive,
                ]}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.closeIcon} onPress={handleClosePress}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{`${user.first_name} ${user.last_name}, ${
            new Date().getFullYear() -
            new Date(user.dob.split("/").reverse().join("-")).getFullYear()
          }`}</Text>
          <Text
            style={styles.location}
          >{`${user.location.city}, ${user.location.country}`}</Text>
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
      <Footer navigation={navigation} activeTab="profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageWrapper: {
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: 600,
  },
  image: {
    width: width,
    height: 600,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    left: 15,
    zIndex: 1,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E1E1E1",
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: "#E91E63",
  },
  details: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  location: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "400",
  },
  description: {
    paddingVertical: 20,
    fontSize: 14,
  },
  interestText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  interestRow: {
    flexDirection: "row",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  interestCol: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 3,
    backgroundColor: "#ce1694",
    borderRadius: 15,
  },
  interest: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 11,
  },
});

export default MyProfile;
