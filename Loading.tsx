import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
    padding: 20,
    flex: 1, // Allows the container to fill the screen
  },
});
