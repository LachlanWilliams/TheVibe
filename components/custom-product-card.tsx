import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, H2, Paragraph } from 'tamagui';

import HeartButton from './heart-button';

export default function customProductCard({ imageLink, name }: { imageLink: any; name: any }) {
  return (
    <Card elevate size="$4" height={500}>
      <Card.Header padded>
        <H2>{name}</H2>
        <Paragraph theme="alt2">$49.90</Paragraph>
      </Card.Header>
      <Card.Footer>
        <HeartButton />
      </Card.Footer>
      <Card.Background>
        <Image style={styles.image} source={imageLink} />
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
