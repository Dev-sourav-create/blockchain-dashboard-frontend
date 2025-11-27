import React from "react";

export default function Statcard({ label, value, delta, icon }) {
  const icons = {
    network: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-diameter-icon lucide-diameter"
      >
        <circle cx="19" cy="19" r="2" />
        <circle cx="5" cy="5" r="2" />
        <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
        <path d="m6.41 6.41 11.18 11.18" />
        <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
      </svg>
    ),
    price: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
      >
        {" "}
        <circle cx="12" cy="12" r="10" />{" "}
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />{" "}
        <path d="M12 18V6" />{" "}
      </svg>
    ),
    blockchain: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-box-icon lucide-box"
      >
        {" "}
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />{" "}
        <path d="m3.3 7 8.7 5 8.7-5" /> <path d="M12 22V12" />{" "}
      </svg>
    ),
    transaction: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-notebook-text-icon lucide-notebook-text"
      >
        <path d="M2 6h4" />
        <path d="M2 10h4" />
        <path d="M2 14h4" />
        <path d="M2 18h4" />
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M9.5 8h5" />
        <path d="M9.5 12H16" />
        <path d="M9.5 16H14" />
      </svg>
    ),
  };

  const Icon = icons[icon];

  return (
    <div className="bg-white p-5 rounded-2xl shadow flex justify-between relative w-full">
      <div className="absolute top-3 right-3 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg">
        {delta}
      </div>

      <div className="flex flex-col gap-3">
        <div className="w-12 h-12  rounded-full bg-gray-100 flex items-center justify-center">
          {Icon}
        </div>

        <div className="text-smc text-left text-gray-500">{label}</div>

        <div className="text-2xl font-bold text-gray-900">{value}</div>
      </div>
    </div>
  );
}
