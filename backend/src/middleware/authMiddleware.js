import jwt from "jsonwebtoken"

export const auth = async(req, res, next) =>{
    try {
        const bearerToken = req.headers.authorization;
        const token = token.split(' ')[1]
        const decode =  jwt.verify(token, process.env.JWT_SECRET)

        req.id =  decode.id
        next()

    } catch (error) {
        return res.json({
            success:false,
            message:error.message,
            status:401
        })
    }
}