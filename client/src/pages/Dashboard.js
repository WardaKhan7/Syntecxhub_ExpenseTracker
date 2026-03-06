import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setAuth }) => {
    const [expenses, setExpenses] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('date-desc');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const res = await api.get('/expenses');
                setExpenses(res.data);
            } catch (err) {
                console.error('Error fetching expenses', err);
                if (err.response && err.response.status === 401) {
                    logout();
                }
            }
        };

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        fetchExpenses();
    }, []);

    const handleAddExpense = useCallback(async (newExpense) => {
        try {
            const res = await api.post('/expenses', newExpense);
            setExpenses(prev => [...prev, res.data]);
        } catch (err) {
            console.error('Error adding expense', err);
        }
    }, []);

    const handleDeleteExpense = useCallback(async (id) => {
        try {
            await api.delete(`/expenses/${id}`);
            setExpenses(prev => prev.filter(expense => expense._id !== id));
        } catch (err) {
            console.error('Error deleting expense', err);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuth(false);
        navigate('/login');
    };

    const totalBalance = useMemo(() => {
        return expenses.reduce((sum, item) => sum + item.amount, 0);
    }, [expenses]);

    const filteredAndSortedExpenses = useMemo(() => {
        let result = expenses;
        if (filter !== 'All') {
            result = expenses.filter(expense => expense.category === filter);
        }

        result = [...result].sort((a, b) => {
            switch (sort) {
                case 'amount-desc':
                    return b.amount - a.amount;
                case 'amount-asc':
                    return a.amount - b.amount;
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date);
                case 'date-desc':
                default:
                    return new Date(b.date) - new Date(a.date);
            }
        });

        return result;
    }, [expenses, filter, sort]);

    const filteredTotal = useMemo(() => {
        return filteredAndSortedExpenses.reduce((sum, item) => sum + item.amount, 0);
    }, [filteredAndSortedExpenses]);

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="header-content">
                    <h1>Modern Expense Tracker</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        {user && <span>Welcome, {user.name}</span>}
                        <button onClick={logout} className="btn" style={{ padding: '0.5rem 1rem', backgroundColor: '#e74c3c' }}>Logout</button>
                    </div>
                </div>
            </header>

            <div className="balance-card" style={{ margin: '20px auto', maxWidth: '800px' }}>
                <span className="balance-label">Total Balance</span>
                <span className="balance-amount">${totalBalance.toFixed(2)}</span>
            </div>

            <main className="main-content">
                <div className="layout-grid">
                    <section className="form-section">
                        <ExpenseForm onAddExpense={handleAddExpense} />

                        {filter !== 'All' && (
                            <div className="filter-stats-card">
                                <h3>{filter} Spending</h3>
                                <p className="filter-total">${filteredTotal.toFixed(2)}</p>
                                <p className="filter-count">({filteredAndSortedExpenses.length} items)</p>
                            </div>
                        )}
                    </section>

                    <section className="list-section">
                        <ExpenseList
                            expenses={filteredAndSortedExpenses}
                            onDelete={handleDeleteExpense}
                            filter={filter}
                            setFilter={setFilter}
                            sort={sort}
                            setSort={setSort}
                        />
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
