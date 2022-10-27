import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseHandler = (expenseData) => {
    expenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditingHandler();
  };
  const setEditingHandler = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={setEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onSetEditing={setEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
