import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Footer = ({ navigation, activeTab }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[
          styles.footerButton,
          activeTab === "activity" && styles.activeButton,
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon
          name="explore"
          size={24}
          color={activeTab === "activity" ? "#E91E63" : "grey"}
        />
        <Text
          style={[
            styles.footerButtonText,
            activeTab === "activity" && styles.activeText,
          ]}
        >
          Activity
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.footerButton,
          activeTab === "profile" && styles.activeButton,
        ]}
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Icon
          name="person"
          size={24}
          color={activeTab === "profile" ? "#E91E63" : "grey"}
        />
        <Text
          style={[
            styles.footerButtonText,
            activeTab === "profile" && styles.activeText,
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    borderColor: "#E91E63",
  },
  footerButton: {
    alignItems: "center",
  },
  activeButton: {
    borderRadius: 20,
  },
  footerButtonText: {
    marginTop: 1,
    color: "grey",
  },
  activeText: {
    color: "#E91E63",
  },
});

export default Footer;
