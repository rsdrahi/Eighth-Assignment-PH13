'use client'
import { Button, Input } from '@heroui/react';
import React, { useState } from 'react';
import BookCard from './BookCard';

const SearchBook = ({ books }) => {

  const [inputValue, setInputValue] = useState("")
  const [search, setSearch] = useState("")
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
  // console.log(filteredBooks, "filteredBooks");

  const handleSearchBook = () => {
    setSearch(inputValue)
  }

  return (
    <div>
      <div className='flex items-center justify-end gap-5'>
        <Input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Search Book'
        />
        <Button onClick={handleSearchBook} className={"rounded-lg"}>Search</Button>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
        {
          filteredBooks.map(book => <BookCard key={book.id} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default SearchBook;