import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import ConnectionCard from "../components/ConnectionCard";
import data from "../assets/data.json";
import Footer from "../components/Footer";

const HomeScreen = ({ navigation, route }) => {
  const [connections, setConnections] = useState([]);

  const allConnections = data.map((item) => ({
    name: `${item.first_name} ${item.last_name}`,
    age:
      new Date().getFullYear() -
      new Date(item.dob.split("/").reverse().join("-")).getFullYear(),
    location: `${item.location.city}, ${item.location.country}`,
    topMatch: item.score > 50,
    image: item.photos[0].path,
    user: item,
  }));

  const getRandomConnections = () => {
    const shuffled = [...allConnections].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    if (route.params?.filteredConnections) {
      setConnections(route.params.filteredConnections);
    } else {
      setConnections(getRandomConnections());
    }
  }, [route.params]);

  const handleRefresh = () => {
    setConnections(getRandomConnections());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Connections</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("Filter")}
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
            showTopMatch={index === 0}
          />
        ))}
      </ScrollView>
      <Footer navigation={navigation} activeTab="activity" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 120,
  },
  filterButton: {
    padding: 10,
  },
  filterButtonText: {
    color: "#E91E63",
  },
  refreshButton: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: "#E91E63",
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  refreshButtonText: {
    color: "#E91E63",
  },
  scrollView: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
