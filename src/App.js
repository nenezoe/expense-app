import { useState } from "react";
import "./App.css";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    date: new Date(2020, 7, 14),
    amount: 304.5,
  },
  { id: "e2", title: " Paper", date: new Date(2020, 4, 18), amount: 204.5 },
  { id: "e3", title: " Book", date: new Date(2021, 7, 5), amount: 84.5 },
  { id: "e4", title: "Sugar", date: new Date(2019, 12, 21), amount: 94.5 },
  { id: "e5", title: "Bags", date: new Date(2022, 5, 9), amount: 109.5 },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
