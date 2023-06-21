const User = require('../models/User');
class UserController {

    static async catchAll(req, res) {
        const users = await User.findAll({ include: { association: 'addresses'  } });
        return res.status(200).json(users);
    }
    static async catchOne(req, res) {
        const { userId } = req.params;
        const users = await User.findByPk(userId, { include: { association: 'addresses'  } });
        return res.status(200).json(users);
    }
    static async createUser(req, res) {
        const { name, email } = req.body;
        const user = await User.create({ name, email });

        return res.status(200).json(user);
    }
}

module.exports = UserController;