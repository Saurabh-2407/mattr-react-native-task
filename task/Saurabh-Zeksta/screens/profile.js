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

const { height, width } = Dimensions.get("window");

const UserProfile = ({ route, navigation }) => {
  const { user } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleHeartPress = () => {
    setIsFavorite(!isFavorite);
  };

  const handleScroll = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentImageIndex(index);
  };

  const handleClosePress = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          style={styles.imageContainer}
          onScroll={handleScroll}
          scrollEventThrottle={16}
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
      </View>
      <TouchableOpacity style={styles.closeIcon} onPress={handleClosePress}>
        <Icon name="close" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.name}>
          {user.first_name} {user.last_name},{" "}
          {new Date().getFullYear() -
            new Date(user.dob.split("/").reverse().join("-")).getFullYear()}
        </Text>
        <TouchableOpacity style={styles.heartIcon} onPress={handleHeartPress}>
          <Icon
            name="favorite"
            size={30}
            color={isFavorite ? "red" : "#d9cece"}
          />
        </TouchableOpacity>
        <Text style={styles.location}>
          {user.location.city}, {user.location.country}
        </Text>
        <Text style={styles.description}>
          {user.bio || "No description provided."}
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
    backgroundColor: "white",
  },
  imageWrapper: {
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: 650,
  },
  image: {
    width: width,
    height: 650,
  },
  heartIcon: {
    position: "absolute",
    top: 17,
    right: 10,
    zIndex: 1,
  },
  closeIcon: {
    marginTop: 40,
    position: "absolute",
    top: 25,
    left: 10,
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
  noInterests: {
    fontSize: 14,
    color: "grey",
  },
});

export default UserProfile;
