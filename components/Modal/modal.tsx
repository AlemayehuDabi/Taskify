'use client';
import React from 'react';

export default function Modal({
  isOpen,
  isDeleted,
  setIsOpen,
}: {
  isOpen: boolean;
  isDeleted: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log(isDeleted);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? 'bg-black/50' : 'hidden'
      } px-4 sm:px-6 md:px-8`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white px-6 sm:px-10 md:px-14 lg:px-25 py-10 sm:py-12 rounded-lg w-full max-w-full sm:max-w-[90%] md:max-w-[40rem] z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 space-y-3">
          <h2 className="text-[16px] font-extrabold text-gray-900">
            {isDeleted ? 'Delete Task' : 'Create New Task'}
          </h2>
          <p className="text-xs text-gray-500 font-medium">
            {isDeleted
              ? "This action can't be undone. Enter the word “delete” in the given field below to delete task."
              : 'Organize your productivity effortlessly by creating a new task. Name it whatever helps you stay on top of your game!'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-4">
          <input
            type="text"
            placeholder={isDeleted ? 'Type delete in here' : 'Task name'}
            className="flex-1 border-2 px-3 py-2 placeholder:text-sm border-gray-200 rounded-sm bg-gray-50"
          />
          <button className="bg-primary border-2 border-primary text-white text-sm font-extralight px-4 py-2.5 rounded-sm">
            {isDeleted ? 'Delete Task' : 'Create Task'}
          </button>
        </div>
      </div>
    </div>
  );
}
