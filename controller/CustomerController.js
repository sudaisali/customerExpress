const user = require('../models/CustomerModel')

module.exports = {
    createCustomer: async (req, res) => {
        try {
            
            const newUser = await user.create(req.body);
            res.status(200).json({
                status: "success",
                newUser
            })

        } catch (error) {
            res.status(401).json({
                status: "failed",
                message: error.message
            })
        }

    },
    getAllUser: async (req, res) => {
        try {
            let { limit } = req.query
            const users = await user.find().limit(limit);
            res.status(200).json({
                status: "success",
                users
            })
        } catch (error) {
            res.status(200).json({
                status: "failed",
                message: error.message
            })
        }


    },
    getUserById : async(req,res)=>{
        const userId = req.params.id
        try{
           
           console.log(userId)
          const myUser = await user.findById(userId).exec()
          res.status(200).json({
            status:"Success",
            myUser
          })
          

     }catch(error){
        res.status(201).json({
            status:"Failed",
            message:error.message
        })
     }
    }

}