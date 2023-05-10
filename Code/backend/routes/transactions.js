const { addLiability, getLiabilities, deleteLiability } = require('../controllers/liability');
const { addAssets, getAssets, deleteAssets } = require('../controllers/assets');

const router = require('express').Router();


router.post('/add-assets', addAssets)
    .get('/get-assets', getAssets)
    .delete('/delete-assets/:id', deleteAssets)
    .post('/add-liability', addLiability)
    .get('/get-liabilities', getLiabilities)
    .delete('/delete-liability/:id', deleteLiability)

module.exports = router;