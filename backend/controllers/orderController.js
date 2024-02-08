const Order = require('../models/Order');

/*
GET all orders
only when user is signed in, on there previous orders tab

GET a order (by id)
only when user is signed in, on there previous orders tab, maybe on a different page?

CREATE(post) a order
need atleast one product to create an order, only when user is signed in

UPDATE(put) a order (by id)
only when user is signed in

DELETE a order (by id)
only when user is signed in, maybe we can implement a certain amount of time 
they have before they are able to delete the order?
*/