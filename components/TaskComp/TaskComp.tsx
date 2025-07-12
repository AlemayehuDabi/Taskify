'use client';
import { Plus, Trash2 } from 'lucide-react';
// import NoTask from '@/components/NoTask/NoTask';
import React, { useState } from 'react';
import TaskList from '../TaskList/taskList';
import Modal from '../Modal/modal';

interface Task {
  id: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

export default function TaskComp() {
  const [activeNav, setActiveNav] = useState('Pending');
  const [activeTaskId, setActiveTaskId] = useState(0);
  const [isOPen, setIsOpen] = useState(false);

  const numberOfTasks = 7;

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'FetanSystem Technology internship test project',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'FetanSystem Technology internship test project',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'FetanSystem Technology internship test project',
      status: 'Pending',
    },
    { id: 4, title: 'Complete project documentation', status: 'Completed' },
    { id: 5, title: 'Review code submissions', status: 'Completed' },
    { id: 6, title: 'Setup development environment', status: 'Completed' },
  ]);

  const paginatedTasks = tasks.filter((task) =>
    activeNav === 'Completed'
      ? task.status === 'Completed'
      : task.status !== 'Completed'
  );

  console.log('pagnated', paginatedTasks);

  // const [isAuth, setIsAuth] = useState(false);

  // if (!isAuth) {
  //   return <NoTask />;
  // }

  return (
    <div className={`flex flex-col gap-7`}>
      {/* top nav */}
      <div className="">
        <button
          className={`${
            activeNav === 'Pending'
              ? 'bg-primary border border-primary text-white'
              : 'text-black bg-white border border-gray-300'
          }  px-6 py-1 text-lg  font-bold`}
          onClick={() => setActiveNav('Pending')}
        >
          Pending
        </button>
        <button
          className={`${
            activeNav === 'Completed'
              ? 'bg-primary border border-primary text-white'
              : 'text-black bg-white border border-gray-300'
          }  px-6 py-1 text-lg  font-bold`}
          onClick={() => setActiveNav('Completed')}
        >
          Completed
        </button>
      </div>

      {/* header */}
      <div>
        {activeNav === 'Pending' && (
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold">
              You have got
              <span className="text-primary"> {numberOfTasks} task</span> today
            </span>
            <button
              className="flex items-center gap-1 bg-primary text-gray-200 text-sm px-6 py-2 rounded-lg"
              onClick={() => setIsOpen(true)}
            >
              <Plus size={20} strokeWidth={1.2} />
              Add New
            </button>
          </div>
        )}
      </div>

      {/* status */}
      <div className="-mb-3">
        <section>
          {activeNav === 'Pending' ? (
            <span className="font-semibold text-xl">On Hold</span>
          ) : (
            <div className="flex gap-3 items-center">
              <span className="font-semibold text-xl">Completed</span>
              <span className="bg-light-primary px-5 py-1 rounded-full text-primary">
                Inactive
              </span>
            </div>
          )}
        </section>
      </div>

      {/* tasks */}
      <div>
        <TaskList
          paginatedTasks={paginatedTasks}
          setActiveTaskId={setActiveTaskId}
          activeTaskId={activeTaskId}
          setTasks={setTasks}
        />
      </div>

      {/*pagination*/}

      <div></div>

      {isOPen && (
        <div>
          <Modal setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}
