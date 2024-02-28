import { router } from 'expo-router'; // Assuming you have imported the router instance
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { YStack, Paragraph, Separator, Theme, Text, Button, Input } from 'tamagui';

import { supabase } from '~/utils/supabase';

export default function Forgot() {
  const [forgotEmail, setForgotEmail] = useState('');

  const handleForgotPassword = async () => {
    console.log(forgotEmail);
    if (forgotEmail === '') {
      alert('Please enter your email');
      return;
    }
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
    router.navigate('(login)');
    alert('Email has be sent to: ' + forgotEmail);
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
