import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

function TaskScreen() {
  const { tasks, setTasks } = useContext(MyContext);
  function toggleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }
  function Delete(index) {
    const update = [...tasks];
    update.splice(index, 1);
    setTasks(update);
  }
  return (
    <div className="">
      {tasks.map((task, index) => (
        <div
          key={index}
          className=" relative  text-black font-medium text-s  flex gap-4 items-center  w-105 h-12 bg-white  border border-gray-300 m-4 rounded-lg"
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          <input
            onChange={() => toggleTask(index)}
            checked={task.completed}
            type="checkbox"
            className="w-6 h-4 m-2"
          />
          {task.title}

          <button
            onClick={() => {
              Delete(index);
            }}
            className="absolute top-2 right-2 bg-red-400 text-white rounded-lg w-20"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default TaskScreen;
