import { router } from 'expo-router';
import { useState } from 'react';
import { YStack, H2, Theme, Input, Button } from 'tamagui';

import { findUser } from '~/utils/supabase';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // logic for finding whether all information has been filled out
    if (email === '' || confirmEmail === '' || password === '') {
      alert('Fill out all the information');
      return;
    } else if (email !== confirmEmail) {
      alert('Ensure both emails are the same');
      return;
    }
    console.log('\nEmail: ', email, '\nConfirmEmail: ', confirmEmail, '\nPassword: ', password);

    // check if email has already been used
    const userExsists = await findUser(email);
    console.log('UserExsists: ', userExsists);
    if (userExsists) {
      alert('This email has already been used.');
      return;
    }
    console.log('Creating Account');
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
