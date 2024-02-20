import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { YStack, Paragraph, Separator, Theme } from 'tamagui';

import LoginCard from '~/components/login-card';

export default function login() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <LoginCard />
      </YStack>
    </Theme>
  );
}
