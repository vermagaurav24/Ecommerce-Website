import userModel from "../models/userModel.js"

// add product to user cart
const addToCart = async (req, res) => {
    try {

        const { userId, itemId, size } = req.body

        const userData = await userModel.findById(userId)
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        let CartData = userData.CartData || {}


        if (CartData[itemId]) {
            if (CartData[itemId][size]) {
                CartData[itemId][size] += 1
            }
            else {
                CartData[itemId][size] = 1
            }
        } else {
            CartData[itemId] = {}
            CartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, { CartData })
        res.json({ success: true, message: 'Added to cart' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}

// update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body

        const userData = await userModel.findById(userId)
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        let CartData = userData.CartData || {}


        CartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, { CartData })
        res.json({ success: true, message: 'Cart updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}
// get user cart data 
const getUserCart = async (req, res) => {
    try {

        const { userId } = req.body

        const userData = await userModel.findById(userId)
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        let CartData = userData.CartData || {}


        res.json({ success: true, CartData })



    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { addToCart, updateCart, getUserCart }