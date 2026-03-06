import React, { useState } from 'react';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
    const [isRemoving, setIsRemoving] = useState(false);

    const handleDelete = () => {
        setIsRemoving(true);
        // Wait for the CSS animation to complete before removing from state
        setTimeout(() => {
            onDelete(expense._id);
        }, 300); // 300ms matches CSS transition duration
    };

    const formattedDate = new Date(expense.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className={`expense-item-card ${isRemoving ? 'removing' : ''}`}>
            <div className="expense-item-icon">
                {expense.category === 'Food' && '🍔'}
                {expense.category === 'Travel' && '✈️'}
                {expense.category === 'Shopping' && '🛍️'}
                {expense.category === 'Other' && '📝'}
            </div>

            <div className="expense-item-details">
                <h3 className="expense-item-title">{expense.title}</h3>
                <span className="expense-item-date">{formattedDate}</span>
            </div>

            <div className="expense-item-category">
                <span className={`badge badge-${expense.category.toLowerCase()}`}>
                    {expense.category}
                </span>
            </div>

            <div className="expense-item-amount">
                ${expense.amount.toFixed(2)}
            </div>

            <div className="expense-item-actions">
                {/* Advanced: Edit placeholder or functionality if requested */}
                <button
                    className="action-btn delete-btn"
                    onClick={handleDelete}
                    title="Delete Expense"
                    aria-label="Delete Expense"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default ExpenseItem;
