import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { LogOut, Wallet } from 'lucide-react';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="min-h-screen bg-background font-poppins pb-20">
            {/* Header Navbar */}
            <header className="bg-surface border-b border-borders sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                            <span className="text-secondary font-bold text-xl">T</span>
                        </div>
                        <h1 className="font-bold text-xl text-typography-main tracking-tight m-0 hidden sm:block">Trackly</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        {user && <span className="text-sm font-medium text-typography-muted">Welcome, <span className="text-typography-main font-semibold">{user.name}</span></span>}
                        <Button variant="outline" size="sm" onClick={logout} className="gap-2 border-borders hover:bg-error/10 hover:text-error hover:border-error transition-colors">
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Logout</span>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {/* Balance Card Section */}
                <div className="mb-8">
                    <div className="bg-primary bg-gradient-to-tr from-primary to-[#8C84FF] rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

                        <div className="relative z-10 flex items-center gap-4 mb-2">
                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                <Wallet className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-white/80 font-medium uppercase tracking-wider text-sm">Total Balance</span>
                        </div>
                        <h2 className="relative z-10 text-4xl sm:text-5xl font-bold mt-2">
                            ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </h2>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left Column: Form & Filters */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="border-borders shadow-sm">
                            <CardContent className="p-6">
                                <ExpenseForm onAddExpense={handleAddExpense} />
                            </CardContent>
                        </Card>

                        {filter !== 'All' && (
                            <Card className="border-t-4 border-t-primary border-borders shadow-sm">
                                <CardContent className="p-6 text-center">
                                    <h3 className="text-typography-muted font-medium mb-2">{filter} Spending</h3>
                                    <p className="text-3xl font-bold text-primary mb-1">
                                        ${filteredTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    <p className="text-sm text-typography-muted">({filteredAndSortedExpenses.length} items)</p>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Right Column: List */}
                    <div className="lg:col-span-8">
                        <ExpenseList
                            expenses={filteredAndSortedExpenses}
                            onDelete={handleDeleteExpense}
                            filter={filter}
                            setFilter={setFilter}
                            sort={sort}
                            setSort={setSort}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
