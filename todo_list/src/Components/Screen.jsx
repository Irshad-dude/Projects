import { useState, useContext } from "react";
import { MyContext } from "../context/MyContext";

function Screen({ setViseble }) {
  const { title, setTitle, tasks, setTasks } = useContext(MyContext);
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-105 bg-white text-black shadow-xl rounded-xl p-5 space-y-4">
        <div className="h-12 bg-[#f4f5f7] w-full flex items-center px-3 font-bold rounded-lg">
          Create Task
        </div>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-blue-800"
          placeholder="Task Name..."
        />
        <div className="flex items-center gap-2 font-medium text-gray-700">
          Description
        </div>
        <textarea
          className="w-full h-28 bg-[#f4f5f7] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
          placeholder="Add detail..."
        />
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => {
              setViseble(false);
            }}
            className=" w-24 px-4 py-2 border border-blue-200 text-blue-800 rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (title.trim() === "") return;
              setTasks([
                ...tasks,
                {
                  title,
                  completed: false,
                },
              ]);
              setTitle("");
              setViseble(false);
            }}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg"
          >
            Create Task
          </button>
        </div>
      </div>
    </section>
  );
}

export default Screen;
