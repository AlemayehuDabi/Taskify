'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
// import type { RootState } from '@/store/store';

export default function AuthorizeUser() {
  const router = useRouter();

  // mocked auth in place of actual Redux logic
  // const user = useSelector((state: RootState) => state.users.user);
  // const auth = !!user?.session;

  // temporary till api
  const auth = true;
  const user = {
    id: '507f191e810c19729de860ea',
    name: 'Alemayehu Dabi',
    email: 'alemayehu@example.com',
    session: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.kdJls983ksdkKlsaDAS123jAS',
    createdAt: '2025-07-24T15:23:45.000Z',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    isEmailVerified: true,
  };

  useEffect(() => {
    if (!auth) {
      router.replace('/sign-in');
    } else {
      router.push(`/dashboard/${user.session}`);
    }
  }, [auth, router, user.session]);

  return null;
}
