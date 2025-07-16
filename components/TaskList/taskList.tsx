import { Trash2 } from 'lucide-react';
import DropDown from '../DropDown/dropDown';

export type Status = 'Pending' | 'In Progress' | 'Completed';

export default function TaskList({
  paginatedTasks,
  activeTaskId,
  setActiveTaskId,
  setTasks,
}: any) {
  const handleStatusChange = (taskId: number, newStatus: Status) => {
    setTasks((prev: any) =>
      prev.map((task: any) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="space-y-5">
      {paginatedTasks.map((task: any) => (
        <div
          key={task.id}
          onClick={() => setActiveTaskId(task.id)}
          className={`flex items-center justify-between cursor-pointer py-3
                ${task.status === 'Completed' && 'opacity-50'}
                ${activeTaskId === task.id ? 'bg-light-primary pl-3 p-2' : ''}`}
        >
          <div className="flex items-center gap-3 w-[30rem]">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                task.status === 'Completed' ? 'bg-pink-300' : 'bg-primary'
              }   `}
            ></div>
            <span className="font-semibold">{task.title}</span>
          </div>
          <div>
            <DropDown task={task} handleStatusChange={handleStatusChange} />
          </div>
          <div className="min-w-[2rem]">
            <button className="min-w-[2rem] text-primary ">
              <Trash2 />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
