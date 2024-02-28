import { YStack, H2, Theme, Input, Button } from 'tamagui';

export default function SignUp() {
  const handleSignUp = () => {
    console.log('Creating Account');
  };
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Create a new account</H2>
        <Input placeholder="Email" />
        <Input placeholder="Confirm Email" />
        <Input placeholder="password" />
        <Button onPress={handleSignUp}>Create Account</Button>
      </YStack>
    </Theme>
  );
}
