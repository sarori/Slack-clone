import Menu from '@components/Menu';
import { LogOutButton, ProfileImg, ProfileModal, RightMenu } from '@layouts/Workspace/styles';
import { Header } from '@pages/SignUp/styles';
import { IUserWithOnline } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import useSWR from 'swr';

interface Props {
  userData?: IUser;
}

const DMList: FC<Props> = ({ userData }) => {
  const { workspace } = useParams<{ workspace?: string }>();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { data: memberData } = useSWR<IUserWithOnline[]>(
    userData
      ? `
            http://localhost:3095/api/workspaces/${workspace}/members
        `
      : null,
    fetcher,
  );
  return <div>DMList</div>;
};

export default DMList;
