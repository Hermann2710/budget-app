export interface Expense {
  id: string
  title: string
  amount: number
  category: string
  date: string
}

export interface BudgetState {
  budget: number
  expenses: Expense[]
}

export type BudgetAction =
  | { type: "SET_BUDGET"; payload: number }
  | { type: "ADD_EXPENSE"; payload: Expense }
  | { type: "REMOVE_EXPENSE"; payload: string }
