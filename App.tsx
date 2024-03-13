// File: App.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';
import BodyScreen from './BodyScreen';

const App: React.FC = () => {
  const [updatedData, setUpdatedData] = useState<string>('');

  const updateFooterData = (data: string) => {
    setUpdatedData(data);
  };

  return (
    <View style={styles.container}>
      <HeaderScreen />
      <BodyScreen onUpdate={updateFooterData} />
      <FooterScreen updatedData={updatedData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
