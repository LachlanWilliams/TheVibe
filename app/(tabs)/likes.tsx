import { YStack, H2, Theme } from 'tamagui';

export default function TabTwoScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Likes</H2>
      </YStack>
    </Theme>
  );
}
