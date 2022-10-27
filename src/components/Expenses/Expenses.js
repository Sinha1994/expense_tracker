import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2020);
  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenseByYear = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenseByYear} />
        <ExpensesList expenses={filteredExpenseByYear} />
      </Card>
    </div>
  );
}

export default Expenses;
