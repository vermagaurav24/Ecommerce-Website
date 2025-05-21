import orderModel  from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing order usign COD method
const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})
        res.json({success: true, message:"Order Placced"})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

// placing order usign stripe method
const placeOrderStripe = async (req, res) => {

}

//  placing order using razorpay method 
const placeOrderRazorpay = async (req, res) => {

}

//  all orders data for admin panel
const allOrders = async (req, res) => {

}

//  user order data for frontend
const userOrders = async (req, res) => {
    
}

//  all orders data from admin panel
const updateStatus = async (req, res) => {
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}