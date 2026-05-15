'use client'
import { UpdateUserProfile } from '@/components/UpdateUserProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user
  // console.log(user, "User");

  return (
    <div>
      <Card className='max-w-3xl mx-auto flex flex-col items-center my-8 border'>
        <Avatar className='h-20 w-20 rounded-full'>
          <Avatar.Image alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>

        <h2 className='font-bold text-2xl'>{user?.name}</h2>
        <p className='text-muted'>{user?.email}</p>

        <UpdateUserProfile></UpdateUserProfile>
      </Card>
    </div>
  );
};

export default ProfilePage;