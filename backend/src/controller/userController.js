import { User } from "../models/usermodel.js";
import { loginValidation, SignupVaidation } from "../validation/zodValidation.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const createUser = async(req, res)=>{

    try {
        const data = req.body;

        const {success} = SignupVaidation.safeParse(data)
        if(!success) {
            return res.json({
                success:false,
                message:"Please enter valid Data",
                status:401
            })
        }
        const saltRound = 10;
        const hashedPassword = bcrypt.hashSync(data.password, saltRound)

        const createUser = await User.create({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:hashedPassword
        })

        if(!createUser._id){
            return res.json({
                success:false,
                message:'Failed to create user'
            })
        }
        return res.json({
            success:true,
            message:"User created Successfully",
            status:200
        })

    } catch (error) {
        console.log("error", error.message)
        return res.send("error")        
    }
}

export const loginUser = async(req, res)=>{
    try {
        const data =  req.body

        const parseData = loginValidation.safeParse(data)

        if(!parseData.success){
            return res.json({
                success:false,
                message:"Please enter valid Data",
                status:401
            })
        }

        const loginUser = await User.findOne({
                email:data.email
        })
    

        if(!loginUser._id){
            return res.json({
                status:404,
                message:"User not found",
                success:false
            })
        }

        const validPassword = bcrypt.compare(data.password, loginUser.password)

        if(!validPassword){
            return res.json({
                success:false,
                message:"Password isn't valid",
                status:404
            })
        }
        const token = jwt.sign({id:loginUser._id}, process.env.JWT_SECRET,{
            expiresIn:'5h'
        })

        return res.json({
            success:true,
            message:"Login Successfully",
            status:200,
            token:token
        })
    } catch (error) {
        console.log("error", error.message)
        return res.send("error")      
    }
}
