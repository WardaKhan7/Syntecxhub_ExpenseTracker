import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { PlusCircle } from 'lucide-react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Other');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const titleInputRef = useRef(null);

  useEffect(() => {
    // Auto-focus the first input field when component mounts
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!title.trim() || !amount || !date) {
      setError('Please fill out all required fields.');
      return;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid positive amount.');
      return;
    }

    setError('');

    const newExpense = {
      title: title.trim(),
      amount: parseFloat(amount),
      category,
      date
    };

    onAddExpense(newExpense);

    // Reset form
    setTitle('');
    setAmount('');
    setCategory('Other');
    setDate('');

    // Refocus for next entry
    titleInputRef.current.focus();
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-typography-main mb-6 tracking-tight border-b border-borders pb-4">Add New Expense</h2>

      {error && (
        <div className="mb-4 bg-error/10 border border-error/20 text-error px-4 py-3 rounded-md text-sm font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-typography-main mb-1">
            Description
          </label>
          <input
            type="text"
            id="title"
            ref={titleInputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Groceries"
            className="w-full px-3 py-2 bg-surface border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-typography-main mb-1">
            Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full px-3 py-2 bg-surface border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-typography-main mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 bg-surface border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
          >
            <option value="Food">Food & Dining</option>
            <option value="Travel">Travel & Commute</option>
            <option value="Shopping">Shopping & Retail</option>
            <option value="Other">Other & Misc</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-typography-main mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 bg-surface border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
          />
        </div>

        <Button type="submit" className="w-full mt-2 font-semibold shadow-sm gap-2">
          <PlusCircle className="w-4 h-4" />
          Add Expense
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
