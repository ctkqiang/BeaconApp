import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionBar from '@/components/ActionBar';

const NewPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text> React Native iS Shit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default NewPost;
