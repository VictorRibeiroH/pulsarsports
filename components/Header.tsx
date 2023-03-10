import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    SearchIcon, 
    ShoppingBagIcon,
    UserIcon
} from "@heroicons/react/outline"


function Header() {

const session = false;


  return (

    <header className="sticky top0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
        <div className="flex items-center justify-center md:w-1/5">
            <Link href="/">
                <div className="relative w-5 cursor-pointer opacity-75 h-10 transition hover:opacity-100">
                    <Image 
                        src="https://rb.gy/vsvv2o" 
                        layout="fill" 
                        objectFit='contain' 
                        alt="logo"/>
                </div>
            </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <a className="headerLink">Produtos</a>
            <a className="headerLink">Explorar</a>
            <a className="headerLink">Suporte</a>
        </div>

        <div className="flex items-center justify-center gap-x-4 md:w-1/5">
            <SearchIcon className="headerIcon"/>

            <Link href="/checkout">
                <div className="relative cursor-pointer">
                    <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center 
                    justify-center ronded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                        5
                    </span>
                    <ShoppingBagIcon className="headerIcon"/>
                </div>
            </Link>         

            {session ? (
                <Image
                src={
                    // session.user?.image || 
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                }
                alt=""
                className='cursor-pointer rounded-full'
                width={34}
                height={34}
                // onClick={() => signOut()}
                />
            ) : (
                <UserIcon className="headerIcon" 
                // onClick={() => signIn()} 
                />
            )}
        </div>

    </header>
  )
}

export default Header