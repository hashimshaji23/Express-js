import user from "../model/user.js";
import bcrypt from 'bcrypt'

export const Register = async (req, res, next)=>{
    console.log("heyy")
    try {
        const {name, email , phone , password} = req.body

        console.log(req.body)

        if(!email){
            console.log("Email is required");
        }
        const existngEmail = await user.findOne({email})
        if(existngEmail){
            console.log("user alredy exists");
        }
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new user({name, email, phone, password: hash})
        const saveUser = await newUser.save()
        res.status(200).json({
            status: true,
            message: "successfull",
            data: saveUser
        })

    }catch (err){
        console.log("err", err);
    }
}