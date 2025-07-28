import { FormEvent, useState } from "react"
import { useBudgetContext } from "../contexts/budget-context-helpers"

export default function BudgetForm() {
  const [input, setInput] = useState("")
  const { dispatch } = useBudgetContext()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const budget = parseFloat(input)
    if (isNaN(budget) || budget <= 0) return
    dispatch({ type: "SET_BUDGET", payload: budget })
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 items-center w-full'>
      <input
        type='number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Entrez votre budget (FCFA)'
        className='border p-2 rounded flex-1'
      />
      <button
        type='submit'
        className='bg-green-600 text-white px-4 py-2 rounded cursor-pointer disabled:cursor-not-allowed'
        disabled={parseFloat(input) < 1}
      >
        Valider
      </button>
    </form>
  )
}
