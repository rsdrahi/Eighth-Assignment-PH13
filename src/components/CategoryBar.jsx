import { Button } from '@heroui/react';
import React from 'react';

const CategoryBar = async () => {

  const res = await fetch("https://eighth-assignment-ph-13.vercel.app/category.json");
  const categories = await res.json();
  console.log(categories, "categories");

  return (
    <div>
      <h3>Categories</h3>
      <div>
        {
          categories.map(category => <Button key={category.id}>{category.category}</Button>)
        }
      </div>
    </div>
  );
};

export default CategoryBar;