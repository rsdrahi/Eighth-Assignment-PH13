import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestUpdate = () => {


  return (
    <div className='flex justify-between items-center my-3 gap-4 py-3 bg-gray-200 container mx-auto px-2 rounded-md'>
      <Button className={"rounded-md"}>Update</Button>
      <Marquee>
       
      </Marquee>
    </div>
  );
};

export default LatestUpdate;