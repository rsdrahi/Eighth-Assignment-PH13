"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user
  console.log(user, "User");

  const handleSignOut = async () => {
    await authClient.signOut();
  }

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
            <Link href={"/all-books"}>All Books</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4 font-medium">
          {!user && <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>}
          {
            user &&
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">Sign Out</Button>
            </div>
          }

        </div>

      </nav>
    </div>
  );
};

export default Navbar;