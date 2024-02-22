import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, H2, Button, Input, YStack } from 'tamagui';
import { router } from 'expo-router'; // Assuming you have imported the router instance

export default function LoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // Assuming router.navigate is available in your component
    router.navigate('/(tabs)');
  };

  return (
    <Card elevate size="$4" height={700} width={350}>
      <Card.Header padded>
        <H2>The Vibe</H2>
      </Card.Header>
      <Card.Footer>
        <YStack>
          <Input
            placeholder="User Name"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true} // For password input
          />
          <Button onPress={handleSignIn}>Sign in</Button>
        </YStack>
      </Card.Footer>
      <Card.Background>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/originals/db/69/09/db69093d2a2f46b53e88f4e3f54f0691.jpg',
          }}
        />
      </Card.Background>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
  },
});
