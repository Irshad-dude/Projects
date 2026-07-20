import { useState } from "react";

function Navbar({ setViseble }) {
  return (
    <section>
      <div className="w-full h-14 bg-[#f4f5f7] px-4 flex items-center justify-between  border-b border-[#6b778c]">
        <div className="text-blue-900 font-bold text-lg">FocusClear</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setViseble(true);
            }}
            className="font-sans bg-blue-900 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-800 transition"
          >
            Add task
          </button>
          <div className="text-xl cursor-pointer">🔔</div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
