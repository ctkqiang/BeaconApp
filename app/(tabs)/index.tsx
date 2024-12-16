import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';

const Main = () => {
  const router = useRouter();

  const handleFabPress = () => {
    router.push('/(tabs)/newpost');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Some Posts will be here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'salmon',
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
  },
});

export default Main;
