import React from "react";

export default function PriceRow({ price }) {
  const isPositive = price.change24h >= 0;
  console.log(price.symbol);

  return (
    <div className="flex items-center justify-between py-3 px-4 border border-gray-200 rounded-xl mb-3 bg-white ">
      <div className="flex items-center gap-4">
        {/* Coin Icon */}
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <img
            src={`/icons/${price.symbol.toLowerCase()}.png`}
            alt={price.symbol}
            className="w-6 h-6"
          />
        </div>

        {/* Name + Symbol */}
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 text-sm flex items-center gap-1">
            {price.name}
            <span className="text-xs text-gray-400 font-normal">
              {price.symbol}
            </span>
          </span>
        </div>
      </div>

      {/* MIDDLE - PRICE */}
      <div className="text-gray-800 text-left font-semibold">
        ${Number(price.price).toLocaleString()}
      </div>

      {/* VALUE (green/red) */}
      <div
        className={`font-medium ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? "+" : ""}
        {price.change24h}%
      </div>

      {/* TRADE BUTTON */}
      <button className="px-5 py-1.5 bg-gray-900 text-white rounded-full text-sm font-semibold">
        Trade
      </button>
    </div>
  );
}
