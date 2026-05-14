'use client'
import { Check } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const SignupToast = ({ signup }) => {

  const handleSignUP = () => {
    toast.success('Sign Up Successful')
  }

  return (
    <div>
      <Button onClick={handleSignUP} type="submit"> <Check />Sign Up</Button>
    </div>
  );
};

export default SignupToast;