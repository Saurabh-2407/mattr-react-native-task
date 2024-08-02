// components/Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Icon name="explore" size={24} color="#E91E63" />
        <Text style={styles.footerButtonText}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('MyProfile')}
      >
        <Icon name="person" size={24} color="#E91E63" />
        <Text style={styles.footerButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#E91E63',
  },
  footerButton: {
    padding: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#E91E63',
    marginTop: 5,
  },
});

export default Footer;
