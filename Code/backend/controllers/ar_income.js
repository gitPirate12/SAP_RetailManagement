const IncomeSchema = require("../models/ar_incomeModel")

//
exports.addIncome = async (req, res) => {
    //destructuring request body into its components
    const {title, amount, category, description, type, date} = req.body

    //storing all of these values from the request body into the income variable
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        type,
        date
    })

    //validations 
    try {
        if(!title || !category || !description || !type || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res,status(400).json({message: 'Valid amount requried'})
        }
        //saving data into the database
        await income.save()
        res.status(200).json({message: 'Income was added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
}

exports.getIncomes = async (req, res) => {
    try {
        //finding all incomes, showing the last income entered first
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }

}

exports.deleteIncome = async (req, res) => {
    //storing object id from the req parameters
    const {id} = req.params;
    console.log(req.params);
    //finding and deleting said item from database
    IncomeSchema.findByIdAndDelete(id).then((income) => {
        res.status(200).json({message: 'Income has been deleted'})
    })
    .catch((err) => {
        res.status(500).json({message: 'Server Error'})
    })

}