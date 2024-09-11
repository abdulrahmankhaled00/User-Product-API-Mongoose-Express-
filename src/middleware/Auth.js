import { userModel } from "../../dataBase/model/user.model.js";
import { AppError } from "../utils/appError.js";
import { checkError } from "./checkError.js";
import  jwt  from 'jsonwebtoken';


export const Auth = (req, res, next) => {
    console.log(req.header('token'));
    jwt.verify(req.header('token'), process.env.SECREt_KEY, async (err, decoded) => {
        if (err) next(new AppError(err.message, 404))
        let user = await userModel.findById(decoded.userId)
        if (user) {
            req.body.createdBy = user.id
            next()
        } else {
            next(new AppError('this user not existed', 409))
        }



    })
}