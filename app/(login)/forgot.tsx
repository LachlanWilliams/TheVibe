import { router } from 'expo-router'; // Assuming you have imported the router instance
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { YStack, Paragraph, Separator, Theme, Text, Button, Input } from 'tamagui';

import { resetPassword } from '~/utils/supabase';

export default function Forgot() {
  const [forgotEmail, setForgotEmail] = useState('');

  const handleForgotPassword = async () => {
    console.log(forgotEmail);
    if (forgotEmail === '') {
      alert('Please enter your email');
      return;
    }
    const passwordReset = await resetPassword(forgotEmail);
    if (passwordReset) {
      alert('Reset link has been sent to: ' + forgotEmail);
    } else {
      alert('Email is incorrect');
      return;
    }
    router.navigate('(login)');
  };

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <SafeAreaView>
          <Text>Forgot Password?</Text>
          <Input
            placeholder="Email"
            value={forgotEmail}
            onChangeText={(text) => setForgotEmail(text)}
          />
          <Button onPress={handleForgotPassword}>Reset Password</Button>
        </SafeAreaView>
      </YStack>
    </Theme>
  );
}
