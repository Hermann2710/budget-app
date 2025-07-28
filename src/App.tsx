import { Wallet } from "lucide-react"
import BudgetForm from "./components/budget-form"
import Header from "./components/header"
import ExpenseForm from "./components/expense-form"
import ExpenseList from "./components/expense-list"

export default function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='grid grid-cols-1 gap-2 w-full max-w-5xl p-5'>
        <div className='bg-white p-4 rounded shadow-md'>
          <h1 className='text-3xl flex items-center gap-1 font-bold mb-2'>
            <Wallet /> Budget App
          </h1>
          <BudgetForm />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          <div className='grid grid-cols-1 gap-2'>
            <Header />
            <ExpenseForm />
          </div>
          <ExpenseList />
        </div>
      </div>
    </div>
  )
}
