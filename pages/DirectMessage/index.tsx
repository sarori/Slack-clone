import React from 'react';
import { Container, Header } from '@pages/DirectMessage/styles';
import { useParams } from 'react-router';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import gravatar from 'gravatar';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`http://localhost:3095/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR(`http://localhost:3095/api/users`, fetcher);

  if (!userData || myData) {
    return null;
  }

  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
        <span>{userData.nickname}</span>
      </Header>
    </Container>
  );
};

export default DirectMessage;
