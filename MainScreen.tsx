// File: MainScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Main</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Style cho container của main
  },
  main: {
    // Style cho main
  },
});

export default MainScreen;
