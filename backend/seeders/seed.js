const db = require ('../config/connection.js');
const { Order, Product, User } = require ('../models/index.js');
const userSeeds = require('./userSeed.json');
const productSeeds = require('./productSeed.json');
const orderSeeds = require ('./orderSeed.json');
const cleanDB = require('./cleanDB.js');

db.once('open', async () => {
  try {
    // Clean the 'User' collection
    await cleanDB('User', 'user');

  await User.create(userSeeds);
  await Product.create(productSeeds);
  await Order.create(orderSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
});
