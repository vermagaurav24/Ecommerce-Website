// import jwt from 'jsonwebtoken';

// const adminAuth = async (req,res,next) => {
//     try{
//         const {token} = req.headers
//         if(!token){
//             return res.json({success:false, message:"Not Authorized Login Again"})
//         }
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
//             return res.json({success:false,message:"Not Authorized Login Again"})
//         }
//         next()

//     }catch(error){
//        console.log(error);
//        res.json({success:false,message:error.message})
//     }
// }

// export default adminAuth

import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }
        const token = authHeader.split(' ')[1];
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check decoded token properties
        if (
            token_decode.email !== process.env.ADMIN_EMAIL ||
            token_decode.password !== process.env.ADMIN_PASSWORD
        ) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default adminAuth;