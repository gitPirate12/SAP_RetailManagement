const { addsupplier, getsuppliers, updatesupplier,deletesupplier } = require('../controllers/scm_supplier');
const { addsupplyOrder, getsupplyOrders, updatesupplyorder, deletesupplyOrder } = require('../controllers/scm_supplyorder');

const router = require('express').Router();



router.post('/addsupplier', addsupplier)
    .get('/getsuppliers', getsuppliers)
    .patch('/updatesupplier/:id', updatesupplier)
    .delete('/deletesupplier/:id', deletesupplier)
    .post('/addsupplyorder', addsupplyOrder)
    .get('/getsupplyorders', getsupplyOrders)
    .patch('/updatesupplier/:id', updatesupplyorder)
    .delete('/deletesupplier/:id', deletesupplyOrder)

module.exports = router