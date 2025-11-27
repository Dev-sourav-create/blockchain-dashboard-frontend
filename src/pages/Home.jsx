import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Statcard from "../components/Statscard.";
import PriceRow from "../components/Pricerow";
import BlockRow from "../components/BlockRow";
import { fetchStats, fetchPrices, fetchBlocks } from "../api/api";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Piechart } from "../components/PieChart";
import { useNavigate } from "react-router";
import { SearchBox } from "../components/SearchBox";
import DeveloperPopup from "../components/DeveloperPopup";

export default function Home() {
  const [stats, setStats] = useState([]);
  const [prices, setPrices] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [openPalette, setOpenPalette] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [developerOpen, setDeveloperOpen] = useState(false);

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_BASE; // ✅ added

  const fetchEmployees = async () => {
    try {
      const res = await fetch(`${API}/employee`); // ✅ fixed
      const data = await res.json();

      const formatted = data.map((emp) => ({
        label: emp.name,
        type: emp.role,
        href: `/employee/${emp._id}`,
      }));

      setEmployees(formatted);
    } catch (err) {
      console.error("Error fetching employees", err);
    }
  };

  useEffect(() => {
    fetchStats().then(setStats).catch(console.error);
    fetchPrices().then(setPrices).catch(console.error);
    fetchBlocks().then(setBlocks).catch(console.error);
    fetchEmployees();

    const data = Array.from({ length: 20 }).map((_, i) => ({
      name: i,
      value: 90 + Math.random() * 40,
    }));
    setChartData(data);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f2f3f2] relative lg:flex">
      {/* MOBILE HAMBURGER BUTTON */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-3 m-4 bg-white shadow rounded-md"
      >
        <svg width="24" height="24" stroke="currentColor" fill="none">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>

      {/* SIDEBAR */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onDeveloper={() => setDeveloperOpen(true)}
      />

      {/* SEARCH MODAL */}
      <SearchBox
        open={openPalette}
        onClose={() => setOpenPalette(false)}
        data={employees}
      />
      <DeveloperPopup
        open={developerOpen}
        onClose={() => setDeveloperOpen(false)}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 sm:p-6 overflow-x-hidden">
        {/* SEARCH BAR */}
        <div className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex items-center w-full sm:max-w-xl border border-gray-200 rounded-lg">
            <input
              type="text"
              onClick={() => setOpenPalette(true)}
              onFocus={() => setOpenPalette(true)}
              placeholder="Search Blockchain..."
              className="flex-1 px-4 py-2 outline-none"
            />
            <span className="bg-gray-100 p-4 rounded-r-lg">
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </span>
          </div>

          {/* SIGN IN BUTTON (DESKTOP ONLY) */}
          <div className="hidden lg:flex items-center bg-[#eeefef] hover:scale-95 transition-all rounded-lg px-5 mr-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <button className="text-gray-600 text-sm">Sign In</button>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((s) => (
            <Statcard
              key={s._id}
              label={s.label}
              value={s.value}
              delta={s.delta}
              icon={s.icon}
            />
          ))}
        </div>

        {/* MAIN SECTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 w-full">
          {/* LEFT: Chart + Prices */}
          <div className="lg:col-span-8 space-y-6">
            {/* CHART */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-xl">
                    ฿
                  </div>
                  <div>
                    <div className="font-bold text-lg">Bitcoin BTC</div>
                    <div className="text-green-500 text-sm">
                      $107,457 <span className="text-green-400">+0.47%</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-400">→</div>
              </div>

              <div className="h-56 sm:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="10%"
                          stopColor="#10b981"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="90%"
                          stopColor="#10b981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={2}
                      fill="url(#grad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* PRICE TABLE */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Prices — Market Cap</h3>
                <span className="text-gray-400 text-sm">→</span>
              </div>

              <div className="divide-y">
                {prices.map((price) => (
                  <PriceRow key={price._id} price={price} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 space-y-4">
            {/* BLOCKS */}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Latest Blocks</h3>
                <span className="text-gray-400 text-sm">→</span>
              </div>

              <div className="space-y-2">
                {blocks.map((b) => (
                  <BlockRow key={b._id} block={b} />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Total Revenue</h3>
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
