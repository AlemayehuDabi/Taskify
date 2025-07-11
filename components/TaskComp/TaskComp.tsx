'use client';
import { Plus, Trash2 } from 'lucide-react';
// import NoTask from '@/components/NoTask/NoTask';
import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

type Status = 'Pending' | 'In Progress' | 'Completed';

export default function TaskComp() {
  const [activeNav, setActiveNav] = useState('Pending');
  const [activeTaskId, setActiveTaskId] = useState(0);

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

  const handleStatusChange = (taskId: number, newStatus: Status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // const [isAuth, setIsAuth] = useState(false);

  // if (!isAuth) {
  //   return <NoTask />;
  // }

  return (
    <div className="flex flex-col gap-7">
      {/* top nav */}
      <div className="">
        <button
          className="bg-primary border border-primary  px-6 py-1 text-lg text-white font-bold"
          onClick={() => setActiveNav('Pending')}
        >
          Pending
        </button>
        <button
          className="bg-white border border-gray-300 px-6 py-1 text-lg text-black font-bold"
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
            <button className="flex items-center gap-1 bg-primary text-gray-200 text-sm px-6 py-2 rounded-lg">
              <Plus size={20} strokeWidth={1.2} />
              Add New
            </button>
          </div>
        )}
      </div>

      {/* status */}
      <div>
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
        <div className="space-y-5">
          {paginatedTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => setActiveTaskId(task.id)}
              className={`flex items-center justify-between cursor-pointer py-3 ${
                activeTaskId === task.id ? 'bg-light-primary pl-3 p-2' : ''
              }`}
            >
              <div className="flex items-center gap-3 w-[30rem]">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    task.status === 'Completed' ? 'bg-pink-300' : 'bg-primary'
                  }   `}
                ></div>
                <span
                  className={`${
                    task.status === 'Completed' && 'text-gray-500'
                  } font-semibold `}
                >
                  {task.title}
                </span>
              </div>
              <div className="flex items-center gap-3 min-w-[120px]">
                <select
                  name="status"
                  value={task.status}
                  className="min-w-[120px]"
                  onChange={(e) =>
                    handleStatusChange(task.id, e.target.value as Status)
                  }
                >
                  <option value={task.status} disabled>
                    {task.status}
                  </option>

                  {['Pending', 'In Progress', 'Completed']
                    .filter((status) => status !== task.status)
                    .map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                </select>
              </div>
              <div className="min-w-[2rem]">
                <button className="min-w-[2rem]">
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*pagination*/}

      <div></div>
    </div>
  );
}
