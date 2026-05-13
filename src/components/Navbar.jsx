"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow">
      <nav className=" flex justify-between items-center py-3 container mx-auto w-full">
        <Link href={'/'}>
          <div className="flex gap-2 items-center">
            <Image
              src={"/book_logo.png"}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h3 className="font-black text-lg"></h3>
          </div>
        </Link>

        <ul className="flex items-center gap-5 text-sm font-medium">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Books</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4 font-medium">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;