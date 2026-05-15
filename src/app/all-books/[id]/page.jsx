import BorrowBook from '@/components/BorrowBook';
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';


const BookDetails = async ({ params }) => {

  const { id } = await params;
  const res = await fetch("https://eighth-assignment-ph-13.vercel.app/data.json")
  const books = await res.json();
  // console.log(books, "Books");
  const book = books.find(b => b.id == id)
  console.log(book, "Book");


  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 my-12 shadow p-8 gap-8 rounded-lg'>

      {/* Left Side */}
      <div className='w-full flex items-center justify-center container rounded-lg'>
        <Image
          src={book.image_url}
          alt={book.title}
          height={400}
          width={400}
        />
      </div>

      {/* Right Side */}
      <div className='space-y-6'>
        <h2 className='text-3xl font-bold'>{book.title}</h2>

        <h3 className='font-medium border-y-2 p-3'>By: {book.author}</h3>

        <p> <span className='font-bold'>Description:</span> {book.description}</p>

        <p> <span className='font-bold'>Available:</span> {book.available_quantity}</p>

        <div className='flex gap-3'>
          <div className='font-bold'>
            Category:
          </div>
          <div>
            <Chip className='px-4 bg-amber-200'>{book.category}</Chip>
          </div>
        </div>
        <div className='border-t-2 mb-6 space-y-3'>
          <div className='mt-8'>
            <BorrowBook title={book.title}></BorrowBook>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BookDetails;