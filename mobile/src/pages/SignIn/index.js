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

const SignIn = ({navigation}) => {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
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
            placeholder="password"
          />

          <SubmitButton onPress={() => {}}>Sign In</SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Sign Up</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
};

export default SignIn;
