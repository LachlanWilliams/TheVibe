import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Button } from 'tamagui';

const heartButton = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <Pressable style={styles.card} onPress={handlePress}>
      <AntDesign name="hearto" size={24} color="red" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    height: 45,
  },
});

export default heartButton;
