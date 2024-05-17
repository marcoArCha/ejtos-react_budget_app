import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (updatedBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        setNewBudget(updatedBudget);

        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
