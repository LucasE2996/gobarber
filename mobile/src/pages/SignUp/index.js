import React from 'react';
import {Image} from 'react-native';

import Background from '~/Components/Background';
import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Your name"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="your password"
          />

          <SubmitButton onPress={() => {}}>Sign In</SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Already have an account</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
