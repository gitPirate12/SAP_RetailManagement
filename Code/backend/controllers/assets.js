const AssetSchema= require("../models/AssetsModel")


exports.addAssets = async (req, res) => {
    const {itemCode, name, date, amount, ratio, years}  = req.body

    const assets = AssetSchema({
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
        res.status(200).json({message: 'Assets Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(assets)
}

exports.getAssets = async (req, res) =>{
    try {
        const assets = await AssetSchema.find().sort({createdAt: -1})
        res.status(200).json(assets)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteAssets = async (req, res) =>{
    const {id} = req.params;
    AssetSchema.findByIdAndDelete(id)
        .then((assets) =>{
            res.status(200).json({message: 'Assets Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}