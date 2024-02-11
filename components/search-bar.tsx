import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, XStack, Card } from 'tamagui';

const searchBar = () => {
  return (
    <Card elevate size="$4" height={500} style={styles.card}>
      <XStack alignItems="center" space="$3">
        <Input flex={1} size="$3" placeholder="Search" />
        <Button size="$3">Go</Button>
      </XStack>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    height: 46,
  },
});

export default searchBar;
