import React, { useState, useEffect, useRef } from 'react';

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
    <div className="expense-card form-card">
      <h2 className="card-title">Add New Expense</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            ref={titleInputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Groceries"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="amount">Amount ($)</label>
            <input
              type="number"
              id="amount"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
