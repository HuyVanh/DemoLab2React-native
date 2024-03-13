// File: FooterScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FooterProps {
  updatedData: string;
}

const FooterScreen: React.FC<FooterProps> = ({ updatedData }) => {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
      <Text>Updated Data: {updatedData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FooterScreen;
