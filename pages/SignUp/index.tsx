import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Label, Input, LinkContainer, Button, Form, Error } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  const onChangeEmail = useCallback((e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  }, []);

  const onChangeNickname = useCallback((e) => {
    const {
      target: { value },
    } = e;
    setNickname(value);
  }, []);

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
    },
    [password],
  );

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일</span>
          <div>
            <Input type="email" id="email" name="email" onChange={onChangeEmail} value={email} />
          </div>
        </Label>

        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" onChange={onChangeNickname} value={nickname} />
          </div>
        </Label>

        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" onChange={onChangePassword} value={password} />
          </div>
        </Label>

        <Label id="password-check-label">
          <span>비밀번호 확인</span>
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
        </Label>
      </Form>
      <LinkContainer>
        Do you have account?&nbsp;
        <Link to="/login">Login</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
