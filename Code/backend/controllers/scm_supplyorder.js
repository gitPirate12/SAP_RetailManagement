const supplyOrderSchema = require("../models/scm_supplyOrderModule")


exports.addsupplyOrder = async (req, res) => {
    //destructuring request body into components
    const {orderID, SID, supplierName, item, amount,price,discount,deliverydate} = req.body

    //storing all of these values from the request body into the variable
    const supplyOrder = supplyOrderSchema({
        orderID,
        SID,
        supplierName,
        item,
        amount,
        price,
        discount,
        deliverydate
    })

    //validations 
    try {
        if(!orderID || !SID || !supplierName || !item || !amount || !price || !discount || !deliverydate ){
            return res.status(400).json({message: 'All fields are required!'})
        }
        //saving into the database
        await supplyOrder.save()
        res.status(200).json({message: 'supplyOrder was added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
}

exports.getsupplyOrders = async (req, res) => {
    try {
        //finding all supplyOrders
        const supplyOrders = await supplyOrderSchema.find().
        res.status(200).json(supplyOrders)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }

}



//update database
exports.updatesupplyOrder = async(req, res) => {

    //sorting by id
    const {id} = req.params;
        
    const supplyOrder = await supplyOrderSchema.findOneAndUpdate({id},{
                
        orderID : req.body.orderID,
        SID : req.body.SID,
        supplierName : req.body.supplierName,
        item : req.body.item,
        amount : req.body.amount,
        price :req.body.price ,
        discount:req.body.discount,
        deliverydate:req.bodyeliverydate
    })

    if(!supplyOrder){
    return res.status(400).json({error: 'supplyOrder not found'})
    } 
    res.status(200).json(supplyOrder)        
        
    .catch (error) 
    res.status(500).json({message:'Server Error'})
    }

exports.deletesupplyOrder = async (req, res) => {
    //storing object id from the req parameters
    const {id} = req.params;
        console.log(req.params);
        //finding and deleting said item from database
        supplyOrderSchema.findByIdAndDelete(id).then((supplyOrder) => {
            res.status(200).json({message: 'supplier has been deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
    
    }

    exports.deletesupplyOrder = async (req, res) => {
        //storing object id from the req parameters
        const {id} = req.params;
        console.log(req.params);
        //finding and deleting from database
        supplyOrderSchema.findByIdAndDelete(id)
        .then((supplierOrder) => {
            res.status(200).json({message: 'supplyorder has been deleted'})
        })
        .catch (error) 
        res.status(500).json({message:'Server Error'})
        }
    