const LiabilitySchema = require("../models/LiabilitiesModel")


exports.addLiability = async (req, res) => {
    const {itemCode, name, date, amount, ratio, years}  = req.body

    const assets = LiabilitySchema({
        itemCode,
        name,
        date,
        amount,
        ratio,
        years
    })

    try {
        //validations
        if(!itemCode || !name || !date || !ratio || !years ){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await assets.save()
        res.status(200).json({message: 'Liability Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(assets)
}

exports.getLiabilities = async (req, res) =>{
    try {
        const liabilities = await LiabilitySchema.find().sort({createdAt: -1})
        res.status(200).json(liabilities)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteLiability = async (req, res) =>{
    const {id} = req.params;
    LiabilitySchema.findByIdAndDelete(id) 
        .then((liability) =>{
            res.status(200).json({message: 'Liability Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}