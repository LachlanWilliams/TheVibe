import { YStack, H2, Theme, Input } from 'tamagui';

export default function SignUp() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Create a new account</H2>
      </YStack>
    </Theme>
  );
}
