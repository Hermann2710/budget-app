import { FormEvent, useState } from "react"
import { useBudgetContext } from "../contexts/budget-context-helpers"
import { Expense } from "../types/expense"
import { Currency } from "lucide-react"

const categories = [
  "Logement",
  "Transport",
  "Alimentation",
  "Divertissement",
  "Autre",
]

export default function ExpenseForm() {
  const [title, setTitle] = useState<string>("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState<string>(categories[0])

  const { dispatch } = useBudgetContext()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const numericAmount = parseFloat(amount)
    if (!title || isNaN(numericAmount) || numericAmount <= 0) return

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title,
      amount: numericAmount,
      category,
      date: new Date().toISOString(),
    }

    dispatch({ type: "ADD_EXPENSE", payload: newExpense })

    setTitle("")
    setAmount("")
    setCategory(categories[0])
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow-md p-4 rounded w-full space-y-3'
    >
      <h2 className='text-xl font-semibold flex items-center gap-1'>
        <Currency /> Nouvelle dépense
      </h2>

      <input
        type='text'
        placeholder='Nom de la dépense'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full border p-2 rounded'
      />

      <input
        type='number'
        placeholder='Montant (FCFA)'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className='w-full border p-2 rounded'
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='w-full border p-2 rounded'
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <button
        className='w-full bg-blue-600 text-white py-2 rounded cursor-pointer'
        type='submit'
      >
        Ajouter
      </button>
    </form>
  )
}
