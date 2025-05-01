"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const session = useSession();

  const navItems = [
    {
      title: "Home",
      path: '/'
    },
    {
      title: "About",
      path: '/about'
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Blogs",
      path: "/blogs"
    }
  ]

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
              navItems.map((nav) => (
                <Link className='ml-3 font-bold' key={nav.title} href={nav.path}>
                  {nav.title}
                </Link>
              ))
            }
          </ul>
        </div>
        <Link href={'/'}>
          <Image width={80} height={80} src={'/assets/logo.svg'} alt='logo' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className='flex items-center gap-4' >
          {
            navItems.map((nav) => (
              <Link className='' key={nav.title} href={nav.path}>
                {nav.title}
              </Link>
            ))
          }
        </div>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="btn btn-outline hover:bg-red-500 border-red-600">Appointment</div>
        <div>
          {
            session.status === "authenticated" ? <div className='flex gap-3'>
              {session.status === "loading" && <p>loading</p>}
              <button onClick={() => signOut()} className='btn btn-outline ml-2 bg-red-500 border-red-600'>logout</button>
              {/* <div><h3 className='text-white'>{session.data.user.name}</h3>
                <p className='text-gray-300 '>{session.data.user.email}</p></div> */}
            </div>
              : <Link href={'/login'} className="btn btn-outline ml-2 bg-red-500 border-red-600">login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;