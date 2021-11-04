import Modal from '@components/Modal';
import React, { FC, useCallback } from 'react';
import { Button, Input, Label } from '@pages/SignUp/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowInviteWorkspaceModal: (flag: boolean) => void;
}

const InviteWorkspaceModal: FC<Props> = ({ show, onCloseModal, setShowInviteWorkspaceModal }) => {
  const { workspace } = useParams<{ workspace: string; channel: string }>();
  const [newMember, onChangeNewMember, setNewMember] = useInput('');
  const { data: userData } = useSWR<IUser>('http://localhost:3095/api/users', fetcher);
  const { revalidate: revalidateChannel } = useSWR<IChannel[]>(
    userData ? `http://localhost:3095/api/workspace/${workspace}/channels` : null,
    fetcher,
  );

  const onInviteMember = useCallback(
    (e) => {
      e.preventDefault();
      if (!newMember || !newMember.trim()) {
        return;
      }
      axios
        .post(`http://localhost:3095/api/workspace/${workspace}/members`, {
          email: newMember,
        })
        .then(() => {
          revalidateChannel();
          setShowInviteWorkspaceModal(false);
          setNewMember('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [workspace, newMember],
  );

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onInviteMember}>
        <Label id="member-label">
          <span>Email</span>
          <Input id="member" type="email" value={newMember} onChange={onChangeNewMember} />
        </Label>

        <Button type="submit">Invite</Button>
      </form>
    </Modal>
  );
};

export default InviteWorkspaceModal;
