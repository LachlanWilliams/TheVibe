import { router } from 'expo-router'; // Assuming you have imported the router instance
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, Image, Modal, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { YStack, Paragraph, Separator, Theme, Card, H2, Button, Input, Text } from 'tamagui';

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //const [forgotEmail, setForgotEmail] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // Assuming router.navigate is available in your component
    router.navigate('/(tabs)');
  };

  const handleForgotPassword = () => {
    router.navigate('/forgot');
  };

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <Card elevate size="$4" height={700} width={350}>
          <Card.Header padded>
            <H2>The Vibe</H2>
          </Card.Header>
          <Card.Footer>
            <YStack>
              <Input
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <Input
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true} // For password input
              />
              <Button onPress={handleSignIn}>sign in</Button>
              <Pressable onPress={handleForgotPassword}>
                <Text>Forgot Password</Text>
              </Pressable>
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
      </YStack>
    </Theme>
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
