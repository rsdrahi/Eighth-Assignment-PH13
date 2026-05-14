import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks = async () => {

  const res = await fetch("https://eighth-assignment-ph-13.vercel.app/data.json")
  const books = await res.json();
  // console.log(books, "books");
  const featureBooks = books.slice(0, 8)
  // console.log(featureBooks, "featureBooks");

  return (
    <div>

      <h2
        className='font-bold text-3xl my-6 text-center'
      >Featured Books
      </h2>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
        {
          featureBooks.map(book => <BookCard book={book} key={book.id}></BookCard>)
        }
      </div>

    </div>
  );
};

export default FeaturedBooks;