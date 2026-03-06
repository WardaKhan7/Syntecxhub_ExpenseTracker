import React from 'react';
import ExpenseItem from './ExpenseItem';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const ExpenseList = ({
    expenses,
    onDelete,
    filter,
    setFilter,
    sort,
    setSort
}) => {

    return (
        <Card className="border-borders shadow-sm w-full">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-borders/50">
                <CardTitle className="m-0 text-xl font-bold tracking-tight">Recent Expenses</CardTitle>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex items-center gap-2">
                        <label htmlFor="filter" className="text-sm font-medium text-typography-muted whitespace-nowrap">Filter:</label>
                        <select
                            id="filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="px-3 py-1.5 bg-surface border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm min-w-[130px]"
                        >
                            <option value="All">All Categories</option>
                            <option value="Food">Food & Dining</option>
                            <option value="Travel">Travel & Commute</option>
                            <option value="Shopping">Shopping & Retail</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="text-sm font-medium text-typography-muted whitespace-nowrap">Sort by:</label>
                        <select
                            id="sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="px-3 py-1.5 bg-surface border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm min-w-[140px]"
                        >
                            <option value="date-desc">Date (Newest)</option>
                            <option value="date-asc">Date (Oldest)</option>
                            <option value="amount-desc">Amount (Highest)</option>
                            <option value="amount-asc">Amount (Lowest)</option>
                        </select>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-6">
                {expenses.length === 0 ? (
                    <div className="text-center py-12 px-4 rounded-xl border-2 border-dashed border-borders bg-background/50">
                        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">📝</span>
                        </div>
                        <h3 className="text-lg font-medium text-typography-main mb-1">No expenses found</h3>
                        <p className="text-typography-muted text-sm max-w-sm mx-auto">
                            You haven't added any expenses yet. Add your first transaction to get started with Trackly!
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {expenses.map((expense) => (
                            <ExpenseItem
                                key={expense._id}
                                expense={expense}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default ExpenseList;
