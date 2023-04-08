const { addIncome, getIncomes, deleteIncome } = require('../controllers/ar_income');

const router = require('express').Router();



router.post('/add-income', addIncome)
      .get('/get-incomes', getIncomes)
      .delete('/delete-income/:id', deleteIncome)
module.exports = router