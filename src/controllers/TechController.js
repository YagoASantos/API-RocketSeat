const Tech = require('../models/Tech');

class TechController {
    static async catchAll(req, res) {
        const { userId } = req.params;
        try{
            const techs = await Tech.findAll();
            return res.status(200).json(techs);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
    static async createTech(req, res) {
        const infos = req.body;
        try{
            const tech = await Tech.create(infos);
            return res.status(200).json(tech);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = TechController;