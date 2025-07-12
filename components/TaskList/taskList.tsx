import { Trash2 } from 'lucide-react';

type Status = 'Pending' | 'In Progress' | 'Completed';

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
          <div
            className={`min-w-[120px] ${
              task.status === 'Completed' && 'bg-green-200'
            }  bg-red-100 px-4 py-1 rounded-full`}
          >
            <select
              name="status"
              value={task.status}
              className={`min-w-[120px] ${
                task.status === 'Pending' && 'text-primary'
              } ${task.status === 'In Progress' && 'text-blue-700'} ${
                task.status === 'Completed' && 'text-secondary'
              }`}
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
                  <option key={status} value={status} className="text-black">
                    {status}
                  </option>
                ))}
            </select>
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
