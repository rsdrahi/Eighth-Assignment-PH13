import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const update = [
  {
    "_id": "1",
    "title": "New Arrival: Atomic Habits Now Available in Library"
  },
  {
    "_id": "2",
    "title": "Bestseller Update: The Alchemist Back in Stock"
  },
  {
    "_id": "3",
    "title": "Latest Collection: Harry Potter Series Added"
  },
  {
    "_id": "4",
    "title": "Book Fair Update: 20 New Fiction Books Arrived"
  },
  {
    "_id": "5",
    "title": "Trending Now: Rich Dad Poor Dad Most Borrowed"
  },
  {
    "_id": "6",
    "title": "New Release: The Psychology of Money Added Today"
  }
]

const LatestUpdate = () => {

  return (
    <div className='flex justify-between items-center my-3 gap-4 py-3 bg-gray-200 container mx-auto px-2 rounded-md'>
      <Button className={"rounded-md"}>Update</Button>
      <Marquee pauseOnHover={true}>
        {
          update.map(latest => <span key={latest._id} className='mr-12' >
            {latest.title}
          </span>)
        }
      </Marquee>
    </div>
  );
};

export default LatestUpdate;