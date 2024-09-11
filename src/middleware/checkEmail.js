import { userModel } from "../../dataBase/model/user.model.js"


export const checkEmailExist = async (email) => {
    console.log(email);
    let user = await userModel.findOne({email })
    return user

}
