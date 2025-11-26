import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Sidebar({ open, onClose }) {
  const dispatch = useDispatch();

  return (
    <aside
      className={`
        fixed lg:static top-0 left-0 
        h-screen w-64 bg-[#fcfcfd] shadow-lg z-50 p-6
        flex flex-col justify-between      /* ensures full height */
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div>
        {/* Close Button (mobile only) */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
          onClick={onClose}
        >
          ✕
        </button>

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10 mt-6 lg:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cpu"
          >
            <path d="M12 20v2" />
            <path d="M12 2v2" />
            <path d="M17 20v2" />
            <path d="M17 2v2" />
            <path d="M2 12h2" />
            <path d="M2 17h2" />
            <path d="M2 7h2" />
            <path d="M20 12h2" />
            <path d="M20 17h2" />
            <path d="M20 7h2" />
            <path d="M7 20v2" />
            <path d="M7 2v2" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="8" y="8" width="8" height="8" rx="1" />
          </svg>

          <h1 className="font-semibold text-lg">Blockchain.com</h1>
        </div>

        {/* NAV BUTTONS */}
        <nav className="space-y-2">
          <button className="w-full text-left p-3 rounded-lg bg-gray-100 font-medium">
            Home
          </button>

          {[
            "Prices",
            "Charts",
            "NFTs",
            "DeFi",
            "Academy",
            "News",
            "Developer",
          ].map((item) => (
            <button
              key={item}
              className="w-full text-left p-3 rounded-lg hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* SETTINGS + LOGOUT */}
      <div className="text-gray-500 text-sm pb-4">
        <button className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 w-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-settings"
            >
              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span>Settings</span>
        </button>

        <button
          onClick={() => dispatch(logout())}
          className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 w-full"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>
          </span>
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
