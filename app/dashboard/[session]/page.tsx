import Dashboard from '@/components/Dashboard/dashboard';
import React from 'react';

export default async function page({
  params,
}: {
  params: Promise<{ session: string }>;
}) {
  const { session } = await params;

  console.log(
    'this is the session: it will be replace with the original session api',
    session
  );

  return <Dashboard />;
}
