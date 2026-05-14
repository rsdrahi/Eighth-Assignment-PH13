'use client'
import { Button } from '@heroui/react';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const BorrowBook = ({ title }) => {

  const handleBookBorrow = () => {
    toast.success(`${title} Book Borrow is Successful`)
  }

  return (
    <div>
      <Button onClick={handleBookBorrow} className={"w-full"} variant='outline'>Borrow This Book</Button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BorrowBook;