import React from 'react';
import TaskComp from '@/components/TaskComp/TaskComp';
import NavBar from '@/components/NavBar/NavBar';

export default async function Dashboard({
  params,
}: {
  params: Promise<{ session: string }>;
}) {
  const { session } = await params;

  console.log('this is the session', session);

  return (
    <div className="container mx-auto">
      <div className="xl:px-40 pt-5 space-y-13 mb-4">
        <NavBar />
        <div className="px-10 xl:px:25">
          <TaskComp />
        </div>
      </div>
    </div>
  );
}
