import { useState } from "react";

export const SearchBox = ({ open, onClose, data = [] }) => {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0  flex justify-center items-start pt-52 z-50"
      onClick={onClose}
    >
      <div
        className="
          bg-white 
          w-[90%]             /* mobile width */
          max-w-xl            /* desktop width */
          mx-4                /* mobile side margin */
          h-64 lg:h-72        /* smaller height on mobile */
          rounded-xl 
          shadow-xl shadow-gray-300 
          border border-gray-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center border-gray-300 border-b">
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            className="w-full text-sm px-4 py-3 outline-none mb-3"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div onClick={onClose} className="group px-2 py-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-gray-500 transition"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>

        <div className="max-h-48 lg:max-h-58 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No result found</p>
          ) : (
            filtered.map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center justify-between gap-4"
              >
                <span className="truncate max-w-[60%]">{item.label}</span>
                <span className="text-gray-400 text-sm truncate max-w-[30%]">
                  {item.type}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
