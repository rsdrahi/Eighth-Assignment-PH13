'use client'
import { Check } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const BorrowBook = ({ title }) => {

  const handleBookBorrow = () => {
    toast.success(`${title} Book Borrow is Successful`)
  }

  return (
    <div>
      <Button onClick={handleBookBorrow} className={"w-full"} variant='outline'>Borrow This Book</Button>

    </div>
  );
};

export default BorrowBook;