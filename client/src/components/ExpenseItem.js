import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const ExpenseItem = ({ expense, onDelete }) => {
    const [isRemoving, setIsRemoving] = useState(false);

    const handleDelete = () => {
        setIsRemoving(true);
        // Wait for the CSS animation to complete before removing from state
        setTimeout(() => {
            onDelete(expense._id);
        }, 300);
    };

    const formattedDate = new Date(expense.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const getCategoryStyles = (category) => {
        switch (category) {
            case 'Food':
                return { bg: 'bg-orange-100', text: 'text-orange-700', icon: '🍔' };
            case 'Travel':
                return { bg: 'bg-sky-100', text: 'text-sky-700', icon: '✈️' };
            case 'Shopping':
                return { bg: 'bg-pink-100', text: 'text-pink-700', icon: '🛍️' };
            default:
                return { bg: 'bg-purple-100', text: 'text-purple-700', icon: '📝' };
        }
    };

    const catStyle = getCategoryStyles(expense.category);

    return (
        <div className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-surface border border-borders rounded-xl hover:shadow-md hover:border-gray-300 transition-all duration-300 gap-4 sm:gap-0 ${isRemoving ? 'opacity-0 -translate-x-5' : 'opacity-100 translate-x-0'}`}>

            <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 ${catStyle.bg}`}>
                    {catStyle.icon}
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-typography-main truncate">
                        {expense.title}
                    </h3>
                    <span className="text-xs text-typography-muted mt-0.5 whitespace-nowrap">
                        {formattedDate}
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-8 sm:ml-auto">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${catStyle.bg} ${catStyle.text}`}>
                    {expense.category}
                </span>

                <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-typography-main min-w-[80px] text-right">
                        ${expense.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>

                    <button
                        onClick={handleDelete}
                        title="Delete Expense"
                        aria-label="Delete Expense"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-typography-muted hover:text-error hover:bg-error/10 transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExpenseItem;
