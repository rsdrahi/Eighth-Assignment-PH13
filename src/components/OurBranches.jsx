import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const OurBranches = async () => {

  const res = await fetch('https://eighth-assignment-ph-13.vercel.app/branch.json');
  const branches = await res.json()
  // console.log(branches, "branches");

  return (
    <Card className='border'>
      <h2 className='font-bold text-2xl text-center my-2'>Our Branches</h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
        {
          branches.map(branch => <div key={branch.id}>
            <Image
              src={branch.image}
              alt='Branch Name'
              height={400}
              width={300}
              className='object-cover w-full h-[200px] rounded-md'
            />
            <p className='font-bold text-center my-3'>{branch.city}</p>
          </div>)
        }
      </div>
    </Card>
  );
};

export default OurBranches;