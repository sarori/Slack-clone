import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import useSWR from 'swr';
import { Redirect } from 'react-router';

const Workspace: FC = ({ children }) => {
  const { data, error, mutate } = useSWR('/api/users', fetcher);
  // const onLogOut = useCallback(() => {
  //   axios
  //     .post('/api/users/logout', null, {
  //       withCredentials: true,
  //     })
  //     .then(() => {
  //       mutate(false, false);
  //     });
  // }, []);

  const onLogOut = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogOut}>LogOut</button>
      {children}
    </div>
  );
};

export default Workspace;
