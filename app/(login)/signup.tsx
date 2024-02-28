import { router } from 'expo-router';
import { useState } from 'react';
import { YStack, H2, Theme, Input, Button } from 'tamagui';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (email === '' || confirmEmail === '' || password === '') {
      alert('Fill out all the information');
    } else if (email !== confirmEmail) {
      alert('Ensure both emails are the same');
    } else {
      console.log('Creating Account');
    }
    console.log('\nEmail: ', email, '\nConfirmEmail: ', confirmEmail, '\nPassword: ', password);
    //router.navigate('(login)');
  };

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Create a new account</H2>
        <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input
          placeholder="Confirm Email"
          value={confirmEmail}
          onChangeText={(text) => setConfirmEmail(text)}
        />
        <Input
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button onPress={handleSignUp}>Create Account</Button>
      </YStack>
    </Theme>
  );
}
