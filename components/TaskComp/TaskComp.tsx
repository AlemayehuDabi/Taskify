'use client';
import NoTask from '@/components/NoTask/NoTask';
import React from 'react';

export default function TaskComp() {
  // const [isAuth, setIsAuth] = useState(false);

  // if (!isAuth) {
  //   return <NoTask />;
  // }

  return (
    <div>
      {/* <span>your tasks are here</span> */}
      <NoTask />
    </div>
  );
}
