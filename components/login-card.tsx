import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, H2, Button, Input, YStack } from 'tamagui';
import { router } from 'expo-router';

export default function loginCard() {
  const handlePress = () => {
    router.navigate('/(tabs)');
    console.log('Sign in Pressed');
  };

  return (
    <Card elevate size="$4" height={700} width={350}>
      <Card.Header padded>
        <H2>The Vibe</H2>
      </Card.Header>
      <Card.Footer>
        <YStack>
          <Input>User Name</Input>
          <Input>Password</Input>
          <Button onPress={handlePress}>Sign in</Button>
        </YStack>
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
