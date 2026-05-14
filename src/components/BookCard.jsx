import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {

  // console.log(book, "Book");
  return (
    <Card className='border my-8 rounded-xl container mx-auto'>

      <div className='relative w-full aspect-square'>
        <Image src={book.image_url}
          alt={book.title}
          fill
          className='rounded-xl'
        />
        <Chip className='absolute right-2 top-2 bg-amber-100'>{book.category}</Chip>
      </div>

      <div>
        <h2 className='font-medium'>{book.title}</h2>
      </div>

      <div className='flex justify-between items-center text-sm'>
        <p>By: {book.author}</p>
        <Separator orientation='vertical'></Separator>
        <p>Tag: {book.category}</p>
      </div>

      <Link href={`/all-books/${book.id}`}>
        <Button
          className={'w-full'}
          variant='outline'
        >View Details
        </Button>
      </Link>

    </Card>
  );
};

export default BookCard;