import jwt from 'jsonwebtoken'
import User from '../model/user.js'

const authChec = async (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next()
    } else {
        try {
            const token = req.headers.authorization.split(" ")[1]
            if (!token) {
                console.log("authentication failed");
            } else {

                const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
                const validUser = await User.findOne({_id : decodedToken.userid})
                console.log(validUser);
                if (!validUser) {
                    console.log("Invalid credentials");
                } else {
                    req.userDetails = { userId: deccodedToken.userId, userRole: decodedToken.userRole }
                    next()
                }

            }
        } catch (error) {
            console.log("Authentication failed !");
        }
    }
}

export default authChec;