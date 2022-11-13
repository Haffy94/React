const { response, json } = require('express')
const jwt = require('JsonWebToken');



const validarJWT = (req, res = response, next) => {

    // x-token headers
    const token = req.header('x-token')


    if ( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'no hay token en la peticion'
        });
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = payload.uid;
        req.name = payload.name;

        
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg: 'token no valido'
        });
    }


    next();

}




module.exports = {
    validarJWT
}
