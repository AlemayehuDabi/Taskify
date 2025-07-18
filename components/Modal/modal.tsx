'use client';
import React from 'react';

export default function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? 'bg-black/50' : 'hidden'
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white px-25 py-14 rounded-lg max-w-[40rem] z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" mb-3 space-y-3">
          <h2 className="text-[14px] font-extrabold text-gray-900">
            Create New Task
          </h2>
          <p className="text-xs text-gray-500 font-medium">
            Organize your productivity effortlessly by creating a new task. Name
            it whatever helps you stay on top of your game!
          </p>
        </div>

        <div className="flex w-full items-center gap-4">
          <input
            type="text"
            placeholder="Task name"
            className="flex-1 border-2 px-3 py-2 placeholder:text-sm border-gray-200 rounded-sm bg-gray-50"
          />
          <button className="bg-primary border-2 border-primary text-white text-sm font-extralight px-4 py-2.5 rounded-sm">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
