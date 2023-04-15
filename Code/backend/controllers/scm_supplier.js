const supplierSchema = require("../models/scm_supplierModule")


exports.addsupplier = async (req, res) => {
    //destructuring request body into components
    const {SID, supplierName, phone, itemType, paymentDetails} = req.body

    //storing all of these values from the request body into the variable
    const supplier = supplierSchema({
        SID,
        supplierName,
        phone,
        itemType,
        paymentDetails
    })

    //validations 
    try {
        if(!SID || !supplierName || !phone || !itemType || !paymentDetails){
            return res.status(400).json({message: 'All fields are required!'})
        }
        //saving into the database
        await supplier.save()
        res.status(200).json({message: 'supplier was added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
}

exports.getsuppliers = async (req, res) => {
    try {
        //finding all suppliers
        const suppliers = await supplierSchema.find().
        res.status(200).json(suppliers)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }

}



//update database
exports.updateSupplier = async(req, res) => {
    try {
        const updatedSupplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
            );
            res.json(updatedSupplier);
        }
        catch (err) {
            res.json({ message: err });
        }
}

exports.deletesupplier = async (req, res) => {
    //storing object id from the req parameters
    const {id} = req.params;
    console.log(req.params);
    //finding and deleting said item from database
    supplierSchema.findByIdAndDelete(id)
    .then((supplier) => {
        res.status(200).json({message: 'supplier has been deleted'})
    })
    .catch (error) 
    res.status(500).json({message:'Server Error'})
    }
