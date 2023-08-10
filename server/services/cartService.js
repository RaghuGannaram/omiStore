const Cart = require("../models/Cart");

const getCartById = function (id, callback) {
	Cart.findById(id, callback);
};

const getCartByUserId = function (uid, callback) {
	Cart.find({ userId: uid }, callback);
};

const updateCartByCartId = function (cartId, newCart, callback) {
	Cart.findById({ _id: cartId }, { $set: newCart }, callback);
};

const updateCartByUserId = function (userId, newCart, callback) {
	let query = { userId: userId };
	Cart.find(query, function (err, c) {
		if (err) throw err;

		//exist cart in databse
		if (c.length > 0) {
			Cart.findOneAndUpdate(
				{ userId: userId },
				{
					$set: {
						items: newCart.items,
						totalQty: newCart.totalQty,
						totalPrice: newCart.totalPrice,
						userId: userId,
					},
				},
				{ new: true },
				callback
			);
		} else {
			//no cart in database
			newCart.save(callback);
		}
	});
};

const createCart = function (newCart, callback) {
	newCart.save(callback);
};

module.exports = {
	getCartById,
	getCartByUserId,
	updateCartByCartId,
	updateCartByUserId,
	createCart,
};
