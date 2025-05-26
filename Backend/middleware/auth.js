import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    const token = authHeader.split(' ')[1];

    try {

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}

export default authUser; 