import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BannerImage from '../../public/Banner.jpg'

const Banner = () => {
  return (
    <div className='flex justify-between 
    items-center container mx-auto p-8 bg-gray-50 my-8 rounded-md'>

      {/* left side */}
      <div className='p-12'>
        <h1 className='font-bold text-5xl'>Find Your Next Read</h1>

        <div className='flex gap-5 mt-6 font-medium'>
          <Link href="#">
            <Button className=" p-3 rounded-md">
              Browse Now
            </Button>
          </Link>

          <Link href="#">
            <Button className="p-3 rounded-md " variant='outline'>
              Contact Us
            </Button>
          </Link>

        </div>

      </div>

      {/* right side */}
      <div className='my-12'>
        <Image
          src={BannerImage}
          alt='Banner Image'
          height={400}
          width={400}
          className='rounded-md'
        />
      </div>
    </div>
  );
};

export default Banner;