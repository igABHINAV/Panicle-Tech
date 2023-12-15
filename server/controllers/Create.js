const User= require("../Models/User");

exports.CreateUser = async(req,res)=>{
    try {
        const {name , department , position , salary , age} = req.body;
        const user = await User.create({name , department , position , salary,age});
        res.status(201).json({
            success: true ,
            message : "User Created Successfully !",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}