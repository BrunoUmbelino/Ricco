import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./SignInElements";

function SignIn() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" />
            <FormLabel>Password</FormLabel>
            <FormInput type="password" />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password?</Text>
            <Text>* fake authentication *</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
