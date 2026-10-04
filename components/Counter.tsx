'use client'
import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        setCount(count + 1)
    }

    const handleSubstact = () => {
        count >= 1 ?  
        setCount(count -1): setCount(0)
    }
  return (
    <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-8 text-center">
        <p className="text-xs uppercase ttext-slate-500">Clicks so far</p>
        <p className="text-6xl font-bold text-blue-600 mt-2">{count}</p>

        <div className="flex gap-3 mt-8">
            <button className="flex-1 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer" onClick={()=>setCount(0)}>
                Reset
            </button>
            <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer" onClick={handleAdd}>
                Add One
            </button>
                  <button className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer" onClick={handleSubstact}>
                Remove One
            </button>

        </div>
    </div>
  )
}

export default Counter