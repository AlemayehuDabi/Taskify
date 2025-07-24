import { Trash2 } from 'lucide-react';
import DropDown from '../DropDown/dropDown';
import Modal from '../Modal/modal';
import { Task, TaskStatus } from '@/types/types';

interface TaskListProps {
  paginatedTasks: Task[];
  activeTaskId: number | null;
  setActiveTaskId: (id: number) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TaskList({
  paginatedTasks,
  activeTaskId,
  setActiveTaskId,
  setTasks,
  isOpen,
  setIsOpen,
}: TaskListProps) {
  const handleStatusChange = (taskId: number, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task: Task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="space-y-5">
      {paginatedTasks.map((task: Task) => (
        <div
          key={task.id}
          onClick={() => setActiveTaskId(task.id)}
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 cursor-pointer py-3
                ${task.status === 'Completed' && 'opacity-50'}
                ${activeTaskId === task.id ? 'bg-light-primary pl-3 p-2' : ''}`}
        >
          <div className="flex items-center gap-3 w-full sm:w-[30rem]">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                task.status === 'Completed' ? 'bg-pink-300' : 'bg-primary'
              }`}
            ></div>
            <span className="font-semibold text-sm sm:text-base">
              {task.title}
            </span>
          </div>
          <div className="w-full sm:w-auto">
            <DropDown task={task} handleStatusChange={handleStatusChange} />
          </div>
          <div className="w-full sm:ml-5 2xl:ml-0 sm:w-auto flex justify-end">
            <button className="text-primary" onClick={() => setIsOpen(!isOpen)}>
              <Trash2 />
            </button>
          </div>
        </div>
      ))}

      {isOpen && (
        <>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} isDeleted={true} />
        </>
      )}
    </div>
  );
}
