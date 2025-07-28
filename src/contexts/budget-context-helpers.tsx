import { createContext, Dispatch, useContext } from "react"
import { BudgetAction, BudgetState } from "../types/expense"

export const BudgetContext = createContext<
  { state: BudgetState; dispatch: Dispatch<BudgetAction> } | undefined
>(undefined)

export const useBudgetContext = () => {
  const context = useContext(BudgetContext)
  if (!context)
    throw new Error(
      "Le useBudgetContext doit être utilisé dans un BudgetContextProvider"
    )
  return context
}
