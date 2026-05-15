import { Button } from '@heroui/react';
import React from 'react';

const CategoryBar = async () => {

  const res = await fetch("https://eighth-assignment-ph-13.vercel.app/category.json");
  const categories = await res.json();
  console.log(categories, "categories");

  return (
    <div className='space-x-3 flex justify-start items-center'>
      {
        categories.map(category => <Button size='sm' key={category.id}>{category.category}</Button>)
      }
    </div>
  );
};

export default CategoryBar;