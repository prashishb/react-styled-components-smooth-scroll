import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FromInput,
  FormButton,
  Text,
} from './SignupElements';

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>dogebank</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign Up for an account</FormH1>
              <FormLabel type='name'>Name</FormLabel>
              <FromInput type='name' placeholder='John Doe' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FromInput type='email' placeholder='john@example.com' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FromInput type='password' required />
              <FormButton type='submit'>SignUp</FormButton>
              <Text>Already signed up? Click here to login</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
