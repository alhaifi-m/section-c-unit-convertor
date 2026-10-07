"use client";
import React from "react";
import { useState } from "react";

interface TemperatureCardProps {
  title: string;
}

const TemperatureCard = ({ title }: TemperatureCardProps) => {
  const [celsius, setCelsius] = useState("0");
  const [reversed, setReversed] = useState(false);

  const inputUnit = reversed ? "Fahrenheit" : "Celsius";
  const outputUnit = reversed ? "Celsius" : "Fahrenheit";

  const value = Number(celsius);
  const converted = reversed ? ((value - 32) * 5) / 9 : (value * 9) / 5 + 32;
  const isEmpty = celsius === "";
  const answer = isEmpty ? "-" : converted.toFixed(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(e.target.value); // extract the value from the input event and update the state
  };

  const handleReset = () => {
    setCelsius("0");
  };
  const handleFlip = () => {
    setReversed(!reversed);
  };
  return (
    <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
      <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">
        {inputUnit} to {outputUnit}
      </p>
      <label className="block text-sm font-medium text-slate-700 mt-6 mb-2">
        {inputUnit}:
      </label>
      <input
        type="number"
        value={celsius}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900
                   focus:border-blue-500 focus:outline-none"
      />
      <div className="flex gap-3 mt-4">
        <button
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2 font-semibold
                     text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          onClick={handleFlip}
        >
          Flip
        </button>
        <button
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white
                     hover:bg-blue-700 transition cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="mt-6 rounded-lg bg-slate-50 px-5 py-2 font-semibold text-white transition cursor-pointer">
        <p className="text-xs uppercase text-slate-500">{outputUnit}</p>
        <p className="text-3xl font-bold text-blue-600 mt-1">{answer}</p>

      </div>
    </div>
  );
};

export default TemperatureCard;