import express from "express";

// CONTROLLERS
import { addOrderItems, getOrderById } from "../controllers/orderController.js";

// MIDDLEWARE
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);

export default router;
