const User = require("../models").User
const sequelize = require("sequelize");

exports.update = async (req, res) => {

    if(req.file){
        req.body.avatar = req.file.filename;
    }

    if(typeof req.body.avatar !== "undefined" && req.body.avatar.length === 0) delete req.body.avatar;

    try {

        const [rows, result] = await User.update(req.body,
            {
                where: {
                    id: req.user.id
                },
                returning: true,
                individualHooks: true
            }
            )

            const user = result[0].get({raw: true});
            user.avatar = result[0].avatar 
            delete user.password

            return res.send(user)


        
    } catch (error) {
        res.status(500).json({ error: error.message });
        // This displays the message "Validation error"
        
        // 3rft la2no tal3li hay 2l message b postman w mn 2l debugging
        // 3rft 2no mn hon
        
    }


    return res.send("User Controller");
}