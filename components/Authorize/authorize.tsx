'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function AuthorizeUser() {
  const { isAuth } = useSelector((state: RootState) => state.users);

  const router = useRouter();

  // // mocked auth in place of actual Redux logic
  // const user = useSelector((state: RootState) => state.users.user);
  // const auth = !!user?.session;

  // temporary till api
  const user = {
    id: '507f191e810c19729de860ea',
    name: 'Alemayehu Dabi',
    email: 'alemayehu@example.com',
    session: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.kdJls983ksdkKlsaDAS123jAS',
    createdAt: '2025-07-24T15:23:45.000Z',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    isEmailVerified: true,
  };

  console.log('this is isAuth', isAuth);

  useEffect(() => {
    if (!isAuth) {
      router.replace('/sign-in');
    } else {
      router.push(`/dashboard/${user.session}`);
    }
  }, [isAuth, router, user.session]);

  return null;
}
