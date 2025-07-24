import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Task, TaskStatus } from '@/types/types';
interface DropDownProps {
  task: Task;
  handleStatusChange: (taskId: number, status: TaskStatus) => void;
}

export default function DropDown({ task, handleStatusChange }: DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="min-w-[120px]">
        <Button
          variant="ghost"
          className={cn(
            'w-[150px] rounded-full bg-red-100 hover:bg-red-100 active:bg-red-100 focus:border-none focus:ring-0 border-none shadow-none',
            task.status === 'Pending' && 'text-primary hover:text-primary ',
            task.status === 'In Progress' &&
              'text-blue-700 hover:text-blue-700',
            task.status === 'Completed' &&
              'bg-green-50 hover:bg-green-50 active:bg-green-50 text-secondary hover:text-secondary'
          )}
        >
          {task.status}
          <ChevronDown className="!h-5 !w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[150px]">
        {['Pending', 'In Progress', 'Completed']
          .filter((status) => status !== task.status)
          .map((status) => (
            <DropdownMenuItem
              key={status}
              onClick={() => handleStatusChange(task.id, status as TaskStatus)}
              className={cn(
                status === 'Completed' && 'text-secondary hover:text-secondary',
                status === 'Pending' && 'text-primary hover:text-primary ',
                status === 'In Progress' && 'text-blue-700 hover:text-blue-700'
              )}
            >
              {status}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
