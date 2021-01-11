const Admin = require('../models/Admin');

module.exports = {
    private: async (req, res, next) => {
        if(!req.query.token && !req.body.token) {
            res.json({notallowed: true });
            return;
        }

        let token = '';
        if(req.query.token) {
            token =req.query.token;
        }
        if(req.body.token){
            token = req.body.token;
        }

        if(token == ''){
            res.json({notallowed: true});
        }

        const admin = await Admin.findOne({token});

        if(!admin) {
            res.json({notallowed: true});
            return;
        }

        next();
    }
};