import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Button } from 'tamagui';

const heartButton = () => {
  return (
    <Pressable style={styles.card}>
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
