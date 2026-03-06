import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({
    expenses,
    onDelete,
    filter,
    setFilter,
    sort,
    setSort
}) => {

    return (
        <div className="expense-list-container">
            <div className="list-header">
                <h2 className="card-title">Recent Expenses</h2>

                <div className="controls">
                    <div className="control-group">
                        <label htmlFor="filter">Filter:</label>
                        <select
                            id="filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">All Categories</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="control-group">
                        <label htmlFor="sort">Sort by:</label>
                        <select
                            id="sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="date-desc">Date (Newest)</option>
                            <option value="date-asc">Date (Oldest)</option>
                            <option value="amount-desc">Amount (Highest)</option>
                            <option value="amount-asc">Amount (Lowest)</option>
                        </select>
                    </div>
                </div>
            </div>

            {expenses.length === 0 ? (
                <div className="empty-state">
                    <p>No expenses found. Add some to get started!</p>
                </div>
            ) : (
                <div className="expense-items">
                    {expenses.map((expense) => (
                        <ExpenseItem
                            key={expense._id}
                            expense={expense}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExpenseList;
