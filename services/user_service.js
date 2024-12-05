const User=require('../model/User');
const passwordUtil=require('../util/password_util');
class UserService{
    static async userRegistration(userName,password,role){
        try{
            password=await passwordUtil.getEncryptPassword(password);
            const user=new User({userName,password,role});
            return await user.save();
        }catch (error){
            throw error
        }
    }

    static async checkUserEmail(userName){
        try{
            return await User.findOne({userName});
        }catch (error){
            throw error;
        }
    }

    static async changeUserPassword(user,newPassword){
        try {
            user.password=await passwordUtil.getEncryptPassword(newPassword);
            await user.save();
        }catch (err){
            throw err
        }
    }


    static async getUserDetails(userID){
        try {
            const user=await User.findOne({_id:userID});
            if (user){
                return {
                    userName:user.userName,
                    password:user.password,
                    role:user.role,
                }
            }

        }catch (e) {
            throw e
        }
    }

    static async getUserByID(userID){
        try {
            const user=await User.findOne({_id:userID});
            if (user){
                return user;
            }
        }catch (err){
            throw err
        }
    }

}

module.exports=UserService;