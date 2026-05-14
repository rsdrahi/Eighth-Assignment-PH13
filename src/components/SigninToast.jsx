'use client'
import { Check } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const SigninToast = ({ signin }) => {

  const handleSignIn = () => {
    toast.success('Sign In Successful')
  }

  return (
    <div>
      <Button onClick={handleSignIn} type="submit"> <Check />Sign In</Button>
    </div>
  );
};

export default SigninToast;