import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, H2, Paragraph } from 'tamagui';

import HeartButton from './heart-button';

export default function loginCard() {
  return (
    <Card elevate size="$4" height={500}>
      <Card.Header padded>
        <H2>The Vibe</H2>
      </Card.Header>
      <Card.Footer>
        <HeartButton />
      </Card.Footer>
      <Card.Background>
        <Image
          style={styles.image}
          source="https://i.pinimg.com/originals/db/69/09/db69093d2a2f46b53e88f4e3f54f0691.jpg"
        />
      </Card.Background>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
  },
});
