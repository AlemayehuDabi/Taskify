'use client';
import React from 'react';

export default function Modal(setIsOpen: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md z-50">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
