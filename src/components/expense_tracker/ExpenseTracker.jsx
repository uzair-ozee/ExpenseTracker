import React, { useState } from 'react';
import "./expensetracker.css"
const ExpenseTracker = () => {
  const [reason, setReason] = useState('');
  const [cost, setCost] = useState('');
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalbudget, setTotalBudget] = useState()

  const handleBudget = () => {
    const parsedBudget = parseFloat(budget);
    if (!isNaN(parsedBudget)) {
      setRemaining(parsedBudget);
      setBudget('');
      setTotalBudget(budget)
    }
  };

  const handleExpense = () => {
    const parsedCost = parseFloat(cost);
    if (!isNaN(parsedCost)) {
      const newExpense = { reason: reason, cost: parsedCost };
      setExpenses([...expenses, newExpense]);
      setRemaining(remaining - parsedCost);
      setCost('');
      setReason('');
    }
  };

  return (
    <div className="main_div">
      <div className="elements">
        <div className="heading">
          <span>Budget Tracker</span>
        </div>

        <div className="total_budget">
          <div className="total_amount">
            <span>Total Budget: </span>
            <span>$ {totalbudget}</span>
          </div>
          <div className="inp_btn">
            <div className="budget_inp">
              <input
                type="number"
                placeholder="enter your budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className="budget__btn">
              <button onClick={handleBudget}>ADD BUDGET</button>
            </div>
          </div>
        </div>

        <div className="remaining">
          <span>Remaining Amount:</span>
          <span>$ {remaining}</span>
        </div>

        <div className="spent">
          <span>Spent so far:</span>
          <span>$ {expenses.reduce((total, expense) => total + expense.cost, 0)}</span>
        </div>
      </div>


      <div className="reason">
        <div className="cause">
          <div className="reason_input">
            <input
              type="text"
              placeholder="enter reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            {/* <span>{reason}</span> */}
          </div>

          <div className="cost">
            <input
              type="number"
              placeholder="Enter Amount"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            {/* <span>{cost}</span>/ */}
          </div>
        </div>

        <div className="exp__btn">
          <button onClick={handleExpense}>ADD</button>
        </div>
      </div>

      <div className="expense__div">
        <div className="exp_heading">
          <span
          >Your Expense List</span>
        </div>
        <div className='RandC'>
          {expenses.map((expense, index) => (
            <div className='sb' key={index}>
              <span>{expense.reason}</span>
              <span>$ {expense.cost}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;