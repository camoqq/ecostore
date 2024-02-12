const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderControllers");

router.get("/dashboard", orderController.getOrders);
router.get("/:orderId", orderController.getOrder);
router.post("/", orderController.createOrder);
router.put("/:orderId", orderController.updateOrder);
router.delete("/deleteOrder", orderController.deleteOrder);

module.exports = router;
