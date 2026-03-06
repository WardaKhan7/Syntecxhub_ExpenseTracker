const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Expense = require('../models/Expense');

// @route   GET api/expenses
// @desc    Get all user expenses
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.userId }).sort({ date: -1 });
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/expenses
// @desc    Add new expense
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const { title, amount, category, date } = req.body;

        const newExpense = new Expense({
            title,
            amount,
            category,
            date,
            userId: req.userId
        });

        const expense = await newExpense.save();
        res.json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/expenses/:id
// @desc    Delete expense
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        // Make sure user owns expense
        if (expense.userId.toString() !== req.userId) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await expense.deleteOne();
        res.json({ message: 'Expense removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;
