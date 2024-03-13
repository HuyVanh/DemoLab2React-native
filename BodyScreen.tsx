import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

interface BodyProps {
  onUpdate: (data: string) => void;
}

const BodyScreen: React.FC<BodyProps> = ({ onUpdate }) => {
  const [inputData, setInputData] = useState<string>('');
  const [showInputError, setShowInputError] = useState<boolean>(false);

  const handleInputChange = (text: string) => {
    setInputData(text);
  };

  const handleUpdateFooter = () => {
    if (inputData.trim() !== '') {
      onUpdate(inputData);
      setInputData('');
      setShowInputError(false);
    } else {
      setShowInputError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Footer</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter data..."
        onChangeText={handleInputChange}
        value={inputData}
      />
      {showInputError && <Text style={styles.errorText}>Vui lòng nhập liệu</Text>}
      <Button title="Update" onPress={handleUpdateFooter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default BodyScreen;
