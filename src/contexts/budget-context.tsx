import { ReactNode, useEffect, useReducer } from "react"
import { BudgetAction, BudgetState } from "../types/expense"
import { BudgetContext } from "./budget-context-helpers"

const initialState: BudgetState = {
  budget: 0,
  expenses: [],
}

const reducer = (state: BudgetState, action: BudgetAction): BudgetState => {
  switch (action.type) {
    case "SET_BUDGET":
      return { ...state, budget: action.payload }
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] }
    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.payload),
      }
    default:
      return state
  }
}

export const BudgetContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const stored = localStorage.getItem("budgetState")
    return stored ? JSON.parse(stored) : initialState
  })

  useEffect(() => {
    localStorage.setItem("budgetState", JSON.stringify(state))
  }, [state])

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  )
}
