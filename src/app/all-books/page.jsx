import BookCard from '@/components/BookCard';
import CategoryBar from '@/components/CategoryBar';
import SearchBook from '@/components/SearchBook';
import React from 'react';

const AllBooksPage = async () => {

  const res = await fetch("https://eighth-assignment-ph-13.vercel.app/data.json")
  const books = await res.json();
  // console.log(books, "books");



  return (
    <div>

      <h2 className='text-3xl font-bold text-center my-6'>All Books</h2>

      <CategoryBar></CategoryBar>
      <SearchBook books={books}></SearchBook>

      {/* <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
        {
          books.map(book => <BookCard key={book.id} book={book}></BookCard>)
        }
      </div> */}

    </div>
  );
};

export default AllBooksPage;