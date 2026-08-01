"use client"

import { useState } from "react"

const CounterPage = () => {
  const [count, setCount] = useState(20)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600"
        >
          Increase (+1)
        </button>

        <span className="text-lg font-semibold">{count}</span>

        <button
          onClick={decrement}
          className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Decrease (-1)
        </button>
      </div>
    </div>
  )
}

export default CounterPage