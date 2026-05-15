import Image from 'next/image';
import React from 'react';

const OurBranches = async () => {

  const res = await fetch('https://eighth-assignment-ph-13.vercel.app/branch.json');
  const branches = await res.json()
  // console.log(branches, "branches");

  return (
    <div className=''>
      <h2>Our Branches</h2>
      <div>
        {
          branches.map(branch => <div key={branch.id}>
            <Image
              src={branch.image}
              alt='Branch Name'
              height={200}
              width={150}
            />
          </div>)
        }
      </div>
    </div>
  );
};

export default OurBranches;