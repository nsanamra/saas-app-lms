import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const Navbar = () => {
  return (
    <nav className="navbar">

        <Link href="/"> 
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt="logo" width={46} height={44}/>
            </div>
        </Link>

        <div className="flex items-center gap-8">
            <NavItems />

            <SignedOut>
                <SignInButton>
                    <button className='btn-signin'>
                        Sign-in
                    </button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>

    </nav>
  )
}

export default Navbar
