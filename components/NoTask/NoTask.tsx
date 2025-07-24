'use client';
import { Plus } from 'lucide-react';

export default function NoTask() {
  return (
    <div className="mt-[15rem]">
      <div className="flex flex-col justify-center items-center gap-8">
        {/*text  */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">No Task Yet</h2>

          <span className=" flex flex-col justify-center items-center text-sm text-gray-600">
            <p>No tasks created yet, You can start by clicking</p>
            <p>the add new button bellow to create one</p>
          </span>
        </div>
        {/* button */}
        <button className="bg-primary py-2 px-6 text-xs text-gray-200 rounded-lg flex items-center gap-2">
          <Plus size={16} />
          Add New
        </button>
      </div>
    </div>
  );
}
