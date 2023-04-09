const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50
        },
        amount: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 50
        },
        category: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50,
        },
        type: {
            type: String,
            required: true,
            trim: true,
            maxLength: 10,
            default:"cash"
        },
        date: {
            type: Date,
            required: true,
            trim: true
        }
        

},{timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)