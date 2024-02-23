import { router } from 'expo-router'; // Assuming you have imported the router instance
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Card, H2, Button, Input, YStack, Text } from 'tamagui';
import { supabase } from '~/utils/supabase';

export default function LoginCard() {
  const [modalOpen, setModalOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [forgotEmail, setForgotEmail] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // Assuming router.navigate is available in your component
    router.navigate('/(tabs)');
  };

  const handleForgotPassword = async () => {
    console.log(forgotEmail);
    try {
      let { data, error } = await supabase.auth.resetPasswordForEmail(forgotEmail);
      console.log('forgotEmail data: ', data);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log('forgotEmail error: ', error);
      alert('Email is incorrect');
      return;
    }
    setModalOpen(false);
    alert('Email has be sent to: ' + forgotEmail);
  };

  return (
    <>
      <Modal visible={modalOpen}>
        <SafeAreaView>
          <Text>Forgot Password?</Text>
          <Input
            placeholder="Email"
            value={forgotEmail}
            onChangeText={(text) => setForgotEmail(text)}
          />
          <Button onPress={handleForgotPassword}>Reset Password</Button>
        </SafeAreaView>
      </Modal>
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
            <Pressable onPress={() => setModalOpen(true)}>
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
    </>
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
