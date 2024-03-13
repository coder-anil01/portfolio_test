import express from "express";
import { createPaymentSeccion, verifyPayment } from "../controller/paymentController.js";
const route = express.Router();

route.post('/session', createPaymentSeccion);

route.post('/verifying', verifyPayment);

export default route;