import Background from '@/components/BackgroundImage/BackgroundImg';
import Link from 'next/link';
import React from 'react';

export default function SignUp() {
  return (
    // background image
    <Background>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-[58%] bg-white py-12 flex items-center px-20 rounded-3xl">
          {/* left side */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold ">Taskify</h1>
          </div>

          {/* mid line */}
          <div className="flex justify-center items-center mr-14">
            <div className="bg-gray-300 w-[1px] h-[27rem]" />
          </div>

          {/* right side */}
          <div className="flex-1 flex flex-col justify-center gap-5 w-[2rem]">
            {/* welcoming */}
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold mb-1">Welcome</h1>

              <p className="text-sm text-gray-500 ">
                Enter your credential to continue
              </p>
            </div>

            {/* forms */}
            <form className="flex flex-col gap-3">
              <input
                placeholder="Name"
                className="border border-gray-300 p-3 rounded-lg text-xs text-gray-700 bg-gray-100"
              />
              <input
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-lg text-xs text-gray-700 bg-gray-100"
              />
              <input
                placeholder="Password"
                className="border border-gray-300 p-3 rounded-lg text-xs text-gray-700 bg-gray-100"
              />

              <input
                placeholder="Confirm Password"
                className="border border-gray-300 p-3 rounded-lg text-xs text-gray-700 bg-gray-100"
              />

              {/* show password */}
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  id="show-password"
                  value="show-password"
                  name="show-password"
                  className="mt-0.5"
                />

                <label form="show-password" className="text-sm">
                  Show password
                </label>
              </div>

              {/* button */}
              <button className="bg-primary text-white py-3 rounded-lg font-semibold">
                Log In
              </button>
            </form>
            <span className="text-sm">
              Don&apos;t have an account?
              <Link href="/sign-up" className="border-b-2 font-semibold ml-1">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </Background>
  );
}
