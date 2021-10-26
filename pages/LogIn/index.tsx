import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, LinkContainer } from '@pages/SignUp/styles';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

const LogIn = () => {
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher);
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput(['']);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          'http://localhost:3095/api/users/login',
          {
            email,
            password,
          },
          {
            withCredentials: true,
          },
        )
        .then(() => {
          revalidate();
        })
        .catch((error) => {
          console.log(error.message);
          setLogInError(error.response?.data?.statusCode === 401);
        });
    },
    [email, password],
  );
  console.log(data);
  console.log('error', error);
  if (data) {
    return <Redirect to="/workspace/channel" />;
  }

  // if (!error && userData) {
  //   console.log('로그인됨', userData);
  //   return <Redirect to="/workspace/sleact/channel/일반" />;
  // }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>Email</span>
          <div>
            <Input type="email" id="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>Password</span>
          <div>
            <Input type="password" id="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>Not matched</Error>}
        </Label>
        <Button type="submit">LogIn</Button>
      </Form>
      <LinkContainer>
        You are not registed yet? &nbsp;
        <Link to="/signup">Sign Up</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
