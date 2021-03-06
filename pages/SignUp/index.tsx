import useInput from '@hooks/useInput';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Label, Input, LinkContainer, Button, Form, Error, Success } from './styles';
import axios from 'axios';
import { Redirect } from 'react-router';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const SignUp = () => {
  const { data, error, revalidate } = useSWR('/api/users', fetcher);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const onChangePassword = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      setPassword(value);
      setMismatchError(value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      setPasswordCheck(value);
      setMismatchError(value !== password);
    },
    [password, nickname, email, passwordCheck],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!mismatchError && nickname) {
        setSignUpError('');
        setSignUpSuccess(false);
        axios
          .post('/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response.data);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  if (data) {
    return <Redirect to="/workspace/sleact/channel/??????" />;
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>?????????</span>
          <div>
            <Input type="email" id="email" name="email" onChange={onChangeEmail} value={email} />
          </div>
        </Label>

        <Label id="nickname-label">
          <span>?????????</span>
          <div>
            <Input type="text" id="nickname" name="nickname" onChange={onChangeNickname} value={nickname} />
          </div>
        </Label>

        <Label id="password-label">
          <span>????????????</span>
          <div>
            <Input type="password" id="password" name="password" onChange={onChangePassword} value={password} />
          </div>
        </Label>

        <Label id="password-check-label">
          <span>???????????? ??????</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              onChange={onChangePasswordCheck}
              value={passwordCheck}
            />
          </div>
          {mismatchError && <Error>Check your password again.</Error>}
          {!nickname && <Error>???????????? ??????????????????.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>???????????????????????????. ?????????????????????</Success>}
        </Label>
        <Button type="submit">????????????</Button>
      </Form>

      <LinkContainer>
        Do you have account?&nbsp;
        <Link to="/login">Login</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
