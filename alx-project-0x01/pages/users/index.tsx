'use client';
import React, { useState } from 'react';
import { UserProps } from '@/interfaces';
import User from '@/components/User';
import UserModal from '@/components/UserModal';

const dummyUsers: UserProps[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = (user: UserProps) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>Users</h1>
      {dummyUsers.map((user) => (
        <div key={user.id} onClick={() => handleClick(user)}>
          <User user={user} />
        </div>
      ))}
      {selectedUser && (
        <UserModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={handleClose}
          onSubmit={(user) => {
            console.log('User submitted:', user);
            handleClose();
          }}
        />
      )}
    </div>
  );
}
