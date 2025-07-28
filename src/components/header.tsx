import { Wallet } from "lucide-react"
import { useBudgetContext } from "../contexts/budget-context-helpers"

export default function Header() {
  const { state } = useBudgetContext()

  const totalSpent = state.expenses.reduce((sum, e) => sum + e.amount, 0)
  const remaining = state.budget - totalSpent

  return (
    <div className='bg-white shadow-md p-4 rounded w-full'>
      <h2 className='text-xl font-semibold mb-2 flex items-center gap-1'>
        <Wallet /> Résumé du budget
      </h2>
      <div className='flex justify-between mb-1'>
        <span>Budget :</span>
        <span className='font-medium text-green-700'>
          {state.budget.toFixed(2)} FCFA
        </span>
      </div>
      <div className='flex justify-between mb-1'>
        <span>Dépensé :</span>
        <span className='font-medium text-red-600'>
          {totalSpent.toFixed(2)} FCFA
        </span>
      </div>
      <div className='flex justify-between'>
        <span>Reste :</span>
        <span
          className={`font-bold ${
            remaining < 0 ? "text-red-700" : "text-blue-600"
          }`}
        >
          {remaining.toFixed(2)} FCFA
        </span>
      </div>
    </div>
  )
}
