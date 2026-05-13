import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

const Footer = () => {
  return (

    <div className='bg-[#101727] text-white px-22 py-8'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-24 p-4 container mx-auto'>
        <div className='space-y-4'>
          <Image
            src={"/book_logo.png"}
            alt='Footer Image'
            height={30}
            width={30}
            className='rounded-full'
          />
          <p className='text-sm opacity-60'>Connecting readers with books. Borrow, lend, and build a community of book lovers.</p>
        </div>
        <div className='space-y-4'>
          <h5>Product</h5>
          <ul className='space-y-4 opacity-60'>
            <li><Link href="#" className='hover:underline'>Features</Link></li>
            <li><Link href="#" className='hover:underline'>Pricing</Link></li>
            <li><Link href="#" className='hover:underline'>Templates</Link></li>
            <li><Link href="#" className='hover:underline'>Integrations</Link></li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h5>Company</h5>
          <ul className='space-y-4 opacity-60'>
            <li><Link href="#" className='hover:underline'>About</Link></li>
            <li><Link href="#" className='hover:underline'>Blog</Link></li>
            <li><Link href="#" className='hover:underline'>Careers</Link></li>
            <li><Link href="#" className='hover:underline'>Press</Link></li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h5>Social Links</h5>
          <div className='flex gap-3 cursor-pointer items-center'>
            <FaGithub></FaGithub>
            <FaGoogle></FaGoogle>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
      <hr className='mt-6 opacity-30  container mx-auto' />
      <div className='flex justify-between mt-6  container mx-auto'>
        <p className='opacity-60'>© 2026 Book Borrow. All rights reserved.</p>
        <div className='flex gap-8'>
          <p><a href="" className='hover:underline opacity-60'>Privacy Policy</a></p>
          <p><a href="" className='hover:underline opacity-60'>Terms of Service</a></p>
          <p><a href="" className='hover:underline opacity-60'>Cookies</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;