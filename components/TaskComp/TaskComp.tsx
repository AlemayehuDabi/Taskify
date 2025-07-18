'use client';

import { Plus } from 'lucide-react';
// import NoTask from '@/components/NoTask/NoTask';
import React, { useEffect, useState } from 'react';
import TaskList from '../TaskList/taskList';
import Modal from '../Modal/modal';
import TaskPagination from '../TaskPagination/taskPagination';

interface Task {
  id: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

export default function TaskComp() {
  const [activeNav, setActiveNav] = useState('Pending');
  const [activeTaskId, setActiveTaskId] = useState(0);
  const [isOPen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageForCompleted, setCurrentPageForCompleted] = useState(1);
  const [currentPageForInCompleted, setCurrentPageForInCompleted] = useState(1);
  const [countCompletedTask, setCountCompletedTasks] = useState(0);
  const [countInCompletedTask, setCountInCompletedTasks] = useState(0);

  const itemsPerPage = 3;

  const numberOfTasks = 7;

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Setup development environment', status: 'Pending' },
    { id: 2, title: 'Write project requirements', status: 'Pending' },
    { id: 3, title: 'Initial UI design draft', status: 'Pending' },
    { id: 4, title: 'Database schema planning', status: 'Pending' },
    { id: 5, title: 'Prepare test cases', status: 'Pending' },
    { id: 6, title: 'Team onboarding session', status: 'Pending' },
    { id: 7, title: 'API documentation outline', status: 'Pending' },
    { id: 8, title: 'Confirm hosting setup', status: 'Pending' },

    { id: 9, title: 'Implement user authentication', status: 'In Progress' },
    { id: 10, title: 'Develop dashboard layout', status: 'In Progress' },
    { id: 11, title: 'Integrate payment gateway', status: 'In Progress' },
    { id: 12, title: 'Refactor task management module', status: 'In Progress' },
    { id: 13, title: 'Optimize app performance', status: 'In Progress' },
    { id: 14, title: 'Fix reported bugs', status: 'In Progress' },
    { id: 15, title: 'Add multi-language support', status: 'In Progress' },
    { id: 16, title: 'Update project README', status: 'In Progress' },

    { id: 17, title: 'Deploy latest version to staging', status: 'Completed' },
    { id: 18, title: 'Code review session complete', status: 'Completed' },
    { id: 19, title: 'Project kickoff meeting', status: 'Completed' },
    { id: 20, title: 'Initial client feedback received', status: 'Completed' },
    { id: 21, title: 'Production build release', status: 'Completed' },
    { id: 22, title: 'Prepare release notes', status: 'Completed' },
    { id: 23, title: 'Archive old project files', status: 'Completed' },
    { id: 24, title: 'Security audit passed', status: 'Completed' },
  ]);

  const filteredTasks = tasks.filter((task) =>
    activeNav === 'Completed'
      ? task.status === 'Completed'
      : task.status !== 'Completed'
  );

  const paginatedTasks = filteredTasks.slice(
    ((activeNav === 'Completed'
      ? currentPageForCompleted
      : currentPageForInCompleted) -
      1) *
      itemsPerPage,
    (activeNav === 'Completed'
      ? currentPageForCompleted
      : currentPageForInCompleted) * itemsPerPage
  );

  console.log('pagnated', paginatedTasks);

  // const [isAuth, setIsAuth] = useState(false);

  // if (!isAuth) {
  //  router('/sign-in)
  // }

  // if(tasks.length === 0){
  //  return <NoTask />;
  // }

  useEffect(() => {
    const completedCount = tasks.filter(
      (task) => task.status === 'Completed'
    ).length;
    const inCompletedCount = tasks.filter(
      (task) => task.status !== 'Completed'
    ).length;

    setCountCompletedTasks(completedCount);
    setCountInCompletedTasks(inCompletedCount);
  }, [tasks]);

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
              onClick={() => setIsOpen(!isOPen)}
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

      <div className="">
        <TaskPagination
          totalItems={
            activeNav === 'Completed'
              ? countCompletedTask
              : countInCompletedTask
          }
          currentPage={
            activeNav === 'Completed'
              ? currentPageForCompleted
              : currentPageForInCompleted
          }
          setCurrentPageForCompleted={setCurrentPageForCompleted}
          setCurrentPageForInCompleted={setCurrentPageForInCompleted}
          itemsPerPage={itemsPerPage}
          activeNav={activeNav}
        />
      </div>

      {isOPen && (
        <div>
          <Modal isOpen={isOPen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}
