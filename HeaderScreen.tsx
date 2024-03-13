// File: HeaderScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Style cho container của header
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    // Các style khác cho header text
  },
});

export default HeaderScreen;
