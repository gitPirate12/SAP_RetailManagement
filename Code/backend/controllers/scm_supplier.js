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
exports.updatesupplyorder = async(req, res) => {

    //sorting by id
    const {id} = req.params;
        
    const supplier = await supplierSchema.findOneAndUpdate({id},{
                
        SID : req.body.SID,
        supplierName : req.body.supplierName,
        phone : req.body.phone,
        itemType : req.body.itemType,
        paymentDetails : req.body.paymentDetails
    })

    if(!supplier){
    return res.status(400).json({error: 'Supplier not found'})
    } 
    res.status(200).json(supplier)        
        
    .catch (error) 
    res.status(500).json({message:'Server Error'})
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
