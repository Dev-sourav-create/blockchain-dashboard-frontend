import React from "react";

export default function BlockRow({ block }) {
  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg mb-2 bg-white">
      <div className="w-12 h-12 bg-rose-200 rounded-md flex items-center justify-center">
        <div className="text-xs"></div>
      </div>
      <div className="flex-1 text-left">
        <div className="font-medium ">{block.height}</div>
        <div className="text-xs text-gray-500">
          {new Date(block.time).toLocaleString()}
        </div>
        <div className="text-sm text-gray-500">
          {block.txCount} Txs • {block.sizeMB} Mb
        </div>
      </div>
    </div>
  );
}
