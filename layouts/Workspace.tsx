import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import useSWR from 'swr';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('/api/users', fetcher);
  const onLogOut = useCallback((e) => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        revalidate();
      });
  }, []);
  return (
    <div>
      <button onClick={onLogOut}>LogOut</button>
      {children}
    </div>
  );
};

export default Workspace;
