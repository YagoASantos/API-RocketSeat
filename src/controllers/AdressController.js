const Address = require('../models/Address');

class AddressController {
    static async createAddress (req, res) {
        try{
            const { userId } = req.params
            const infos = req.body;
            const address = await Address.create({ ...infos, user_id: Number(userId) });
            return res.status(200).json(address);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
    static async catchAll (req, res) {
        try{
            const addresses = await Address.findAll();
            return res.status(200).json(addresses);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = AddressController;