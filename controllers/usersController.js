const User = require('../models/user');

module.exports = {

    async getAll(req, res, next){
        try{
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);
        }catch{
            console.log(`Error: ${error}`);
            return res.status(501).json(
                {
                    success: false,
                    message: 'Error al obtener los usuarios'
                });
        }
    },
    async register(req, res, next) {
        try {
            const user = req.body;
            const data = await User.create(user);
            
            return res.status(201).json({
                success: true,
                message: 'El registro se realizó correctamente',
                data: data.id
                
            });

        } catch (error) {
            console.log(req.body)
            console.log(`Error ca: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'El registro no se realizó ',
                error: error
            });
        }
    }
};