import express from "express";

// CONTROLLERS
import { addOrderItems } from "../controllers/orderController.js";

// MIDDLEWARE
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);

export default router;
