'use client';

import Background from '@/components/BackgroundImage/BackgroundImg';
import { signUpUser } from '@/store/slice/users/userslice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function SignUp() {
  const disptach = useDispatch();

  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      '/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.kdJls983ksdkKlsaDAS123jAS'
    );
    disptach(signUpUser());
  };

  return (
    <Background>
      <div className="min-h-screen w-full flex justify-center items-center  sm:px-6 md:px-8 lg:px-12 py-10 lg:py-0">
        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] bg-white py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col lg:flex-row items-center px-5 sm:px-6 md:px-10 lg:px-5 xl:px-20 rounded-3xl gap-10 lg:gap-0">
          {/* left side */}
          <div className="flex-1 w-full flex justify-starts lg:justify-start">
            <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left">
              Taskify
            </h1>
          </div>

          {/* mid line */}
          <div className="hidden lg:flex justify-center items-center px-10">
            <div className="h-[18rem] sm:h-[20rem] lg:h-[23rem] bg-gray-300 w-[1px]" />
          </div>

          <div className="lg:hidden w-full">
            <hr className="h-[0.1px] bg-black w-full" />
          </div>

          {/* right side */}
          <div className="flex-1 w-full flex flex-col justify-center gap-8 sm:gap-5 lg:max-w-[24rem] mx-auto">
            {/* welcoming */}
            <div className="flex flex-col gap-3 text-left">
              <h1 className="text-5xl sm:text-3xl md:text-4xl font-bold">
                Welcome
              </h1>
              <h1 className="text-5xl sm:text-3xl md:text-4xl font-bold mb-1">
                back
              </h1>
              <p className="text-lg sm:text-sm text-gray-500">
                Enter your info to get started with taskify
              </p>
            </div>

            {/* forms */}
            <form className="flex flex-col gap-3 w-full">
              <input
                type="email"
                placeholder="Name"
                className="border border-gray-300 p-3.5 sm:p-3 rounded-lg text-lg sm:text-sm text-gray-700 bg-gray-100 w-full"
              />
              <input
                type="password"
                placeholder="Email"
                className="border border-gray-300 p-3.5 sm:p-3 rounded-lg text-lg sm:text-sm text-gray-700 bg-gray-100 w-full"
              />

              <input
                placeholder="Password"
                className="border border-gray-300 p-3.5 sm:p-3 rounded-lg text-lg sm:text-sm text-gray-700 bg-gray-100 w-full"
              />

              <input
                placeholder="Confirm Password"
                className="border border-gray-300 p-3.5 sm:p-3 rounded-lg text-lg sm:text-sm text-gray-700 bg-gray-100 w-full"
              />

              {/* show password */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="show-password" className="w-4 h-4" />
                <label
                  htmlFor="show-password"
                  className="text-lg sm:flex lg:text-sm"
                >
                  Show password
                </label>
              </div>

              {/* button */}
              <button
                type="submit"
                className="bg-primary text-white py-5 sm:py-3 rounded-lg font-semibold text-xl sm:text-base hover:bg-primary/90 transition-colors"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </form>

            {/* sign up link */}
            <span className="text-lg sm:text-sm text-center lg:text-left">
              Don&apos;t have an account?
              <Link
                href="/sign-in"
                className="border-b-2 border-black hover:border-primary  font-semibold ml-1 hover:text-primary"
              >
                Log In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </Background>
  );
}
