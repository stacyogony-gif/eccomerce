"use client"

import { useState } from "react"

const CalculatorPage = () => {
  const [display, setDisplay] = useState("0")
  const [firstValue, setFirstValue] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForSecond, setWaitingForSecond] = useState(false)

  const inputDigit = (digit: string) => {
    if (waitingForSecond) {
      setDisplay(digit)
      setWaitingForSecond(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const inputDot = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const clear = () => {
    setDisplay("0")
    setFirstValue(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  const toggleSign = () => {
    setDisplay((parseFloat(display) * -1).toString())
  }

  const inputPercent = () => {
    setDisplay((parseFloat(display) / 100).toString())
  }

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display)

    if (firstValue === null) {
      setFirstValue(inputValue)
    } else if (operator) {
      const result = calculate(firstValue, inputValue, operator)
      setDisplay(String(result))
      setFirstValue(result)
    }

    setWaitingForSecond(true)
    setOperator(nextOperator)
  }

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b
      case "-":
        return a - b
      case "×":
        return a * b
      case "÷":
        return b === 0 ? NaN : a / b
      default:
        return b
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)
    if (operator && firstValue !== null) {
      const result = calculate(firstValue, inputValue, operator)
      setDisplay(String(result))
      setFirstValue(null)
      setOperator(null)
      setWaitingForSecond(false)
    }
  }

  const buttonClass =
    "rounded-full text-xl font-medium h-16 w-16 flex items-center justify-center transition active:scale-95"

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-80 rounded-3xl bg-black p-5 shadow-2xl">
        <div className="mb-4 flex h-20 items-end justify-end overflow-hidden px-2">
          <span className="truncate text-5xl font-light text-white">{display}</span>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button onClick={clear} className={`${buttonClass} bg-gray-400 text-black`}>
            {firstValue === null && display === "0" ? "AC" : "C"}
          </button>
          <button onClick={toggleSign} className={`${buttonClass} bg-gray-400 text-black`}>
            +/-
          </button>
          <button onClick={inputPercent} className={`${buttonClass} bg-gray-400 text-black`}>
            %
          </button>
          <button
            onClick={() => performOperation("÷")}
            className={`${buttonClass} bg-orange-500 text-white`}
          >
            ÷
          </button>

          <button onClick={() => inputDigit("7")} className={`${buttonClass} bg-gray-700 text-white`}>7</button>
          <button onClick={() => inputDigit("8")} className={`${buttonClass} bg-gray-700 text-white`}>8</button>
          <button onClick={() => inputDigit("9")} className={`${buttonClass} bg-gray-700 text-white`}>9</button>
          <button
            onClick={() => performOperation("×")}
            className={`${buttonClass} bg-orange-500 text-white`}
          >
            ×
          </button>

          <button onClick={() => inputDigit("4")} className={`${buttonClass} bg-gray-700 text-white`}>4</button>
          <button onClick={() => inputDigit("5")} className={`${buttonClass} bg-gray-700 text-white`}>5</button>
          <button onClick={() => inputDigit("6")} className={`${buttonClass} bg-gray-700 text-white`}>6</button>
          <button
            onClick={() => performOperation("-")}
            className={`${buttonClass} bg-orange-500 text-white`}
          >
            −
          </button>

          <button onClick={() => inputDigit("1")} className={`${buttonClass} bg-gray-700 text-white`}>1</button>
          <button onClick={() => inputDigit("2")} className={`${buttonClass} bg-gray-700 text-white`}>2</button>
          <button onClick={() => inputDigit("3")} className={`${buttonClass} bg-gray-700 text-white`}>3</button>
          <button
            onClick={() => performOperation("+")}
            className={`${buttonClass} bg-orange-500 text-white`}
          >
            +
          </button>

          <button
            onClick={() => inputDigit("0")}
            className={`${buttonClass} col-span-2 w-full bg-gray-700 text-white justify-start pl-6`}
          >
            0
          </button>
          <button onClick={inputDot} className={`${buttonClass} bg-gray-700 text-white`}>.</button>
          <button onClick={handleEquals} className={`${buttonClass} bg-orange-500 text-white`}>=</button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorPage