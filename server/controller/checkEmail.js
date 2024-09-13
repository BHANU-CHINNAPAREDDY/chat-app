const UserModel = require("../models/Usermodel")

async function checkEmail(request,response){
    try{
        const {email}=request.body

        const checkEmail=await UserModel.findOne({email}).select("-password")
        
        if(!checkEmail){
            return response.status(400).json({
                message:"User not exist",
                error:true
            })
        }

        return response.status(200).json({
            message:"email verify",
            error:true,
            data:checkEmail
        })


    }catch(error){
        return response.status(500).json({
            message:error.message||error,
            error:true
        })

    }
}

module.exports=checkEmail