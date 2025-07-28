import { List, Trash2 } from "lucide-react"
import { useBudgetContext } from "../contexts/budget-context-helpers"

export default function ExpenseList() {
  const { state, dispatch } = useBudgetContext()

  const handleDelete = (id: string) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: id })
  }

  if (state.expenses.length === 0) {
    return (
      <p className='text-gray-500 mt-4 text-center'>
        Aucune dépense enregistrée pour le moment.
      </p>
    )
  }
  return (
    <div className='bg-white shadow-md p-4 rounded w-full'>
      <h2 className='text-xl font-semibold mb-3 flex items-center gap-1'>
        <List />
        Liste des dépenses
      </h2>
      <ul className='space-y-2 h-[320px] overflow-y-scroll'>
        {state.expenses.map((expense) => (
          <li
            key={expense.id}
            className='flex justify-between items-start border-b pb-2'
          >
            <div>
              <p className='font-medium'>{expense.title}</p>
              <p className='text-sm text-gray-500'>
                {expense.amount.toFixed(2)} FCFA ⚫ {expense.category}
              </p>
              <p className='text-xs text-gray-400'>
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => handleDelete(expense.id)}
              className='text-red-500 font-bold text-lg ml-2 cursor-pointer'
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
