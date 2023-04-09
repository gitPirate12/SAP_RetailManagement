const { addExpense, getExpenses, deleteExpense } = require('../controllers/ar_expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/ar_income');

const router = require('express').Router();



router.post('/add-income', addIncome)
      .get('/get-incomes', getIncomes)
      .delete('/delete-income/:id', deleteIncome)
      .post('/add-expense', addExpense)
      .get('/get-expenses', getExpenses)
      .delete('/delete-expense/:id', deleteExpense)
module.exports = router