const Order = require("../models/Order");
const User = require("../models/User");

/*
UPDATE(put) a order (by id)
only when user is signed in

*/

//needs authentication, should be on the orders history page
const getOrders = async (req, res) => {
  try {
    // const userId = req.body.user._id; change to req.user._id once we have authentication
    // console.log(userId);
    const orders = await Order.find();
    console.log(orders);
    if (!orders) {
      return res.status(404).json({ error: "Server couldnt find orders" });
    }
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server couldnt find orders" });
  }
};

//needs authentication, should be clickable on the orders history page
const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.orderId });

    res.json(order);
  } catch (error) {
    console.log(error);
    res.json(500).json({ error: "Server couldn't find order" });
  }
};

//only when user is signed in, the add to cart button should execute this function
const createOrder = async (req, res) => {
  try {
    const userId = req.body.user._id; //change to req.user._id once we have authentication

    const newOrder = await Order.create(req.body);
    if (!newOrder) {
      return res.status(404).json({
        error: "Make sure you have atleast one product to create an order",
      });
    }
    await User.findByIdAndUpdate(userId, {
      $push: { orders: newOrder._id },
    });

    res.json(newOrder);
  } catch (error) {
    console.log(error);
    res.json(500).json({ error: "Server couldnt create an order " });
  }
};

//needs authentication, user should be able to update their order on there cart
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.orderId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!order) {
      return res.json(404).json({ error: "Couldn't update order" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
  }
};

// only when user is signed in, maybe we can implement a certain amount of time
// they have before they are able to delete the order?
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndRemove(req.body.orderId);
    if (!order) {
      return res
        .status(404)
        .json({ message: "could not find order and delete" });
    }
    res.json("Order found and deleted");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
};
