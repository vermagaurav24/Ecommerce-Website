import express from 'express';
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} from '../controller/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

 const orderRouter = express.Router()

//  admin feature 
 orderRouter.post('/list', adminAuth, allOrders)
 orderRouter.post('/status', adminAuth, updateStatus)

//  payment feature
orderRouter.post('/place', placeOrder)
orderRouter.post('stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

// user feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter