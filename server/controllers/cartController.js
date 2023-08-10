const cartService = require("../services/cartService");
const CartClass = require("../utils/Cart");
const productController = require("../controllers/productController");
const variantController = require("../controllers/variantController");

const getUserCart = function (req, res, next) {
	let userId = req.params.userId;
	cartService.getCartByUserId(userId, function (err, cart) {
		if (err) return next(err);
		if (cart.length < 1) {
			let err = new CustomError("Cart Error", 404, "not_found", { message: "Create a cart first" });
			return next(err);
		}
		return res.json({ cart: cart[0] });
	});
};

const addToUserCart = function (req, res, next) {
	let {userId, productId, increase, decrease } = req.body;

	cartService.getCartByUserId(userId, function (err, cart) {
		if (err) return next(err);
		let oldCart = new CartClass(cart[0] || { userId });

		if (cart.length < 1 && !productId) {
			return cartService.createCart(oldCart.generateModel(), function (err, resultCart) {
				if (err) return next(err);
				return res.status(201).json({ cart: resultCart });
			});
		}
		productController.getProductByID(productId, function (err, product) {
			if (err) {
				err.status = 406;
				return next(err);
			}
			if (product) {
				if (decrease) oldCart.decreaseQty(product._id);
				else if (increase) oldCart.increaseQty(product._id);
				else oldCart.add(product, product._id);
				let newCart = oldCart.generateModel();
				cartService.updateCartByUserId(userId, newCart, function (err, result) {
					if (err) return next(err);
					return res.status(200).json();
				});
			} else {
				variantController.getVariantByID(productId, function (err, variant) {
					if (err) {
						err.status = 406;
						return next(err);
					}
					if (variant) {
						productController.getProductByID(variant.productID, function (e, p) {
							let color = variant.color ? "- " + variant.color : "";
							let size = variant.size ? "- " + variant.size : "";
							variant.title = p.title + " " + color + size;
							variant.price = p.price;
							if (decrease) oldCart.decreaseQty(variant._id);
							else if (increase) oldCart.increaseQty(variant._id);
							else oldCart.add(variant, variant._id);
							let newCart = oldCart.generateModel();
							cartService.updateCartByUserId(userId, newCart, function (err, result) {
								if (err) return next(err);
								res.status(200).json({ cart: result });
							});
						});
					} else {
						let customError = new CustomError("/cart", 400, "invalid_field", { message: "invalid request body" });
						return next(customError);
					}
				});
			}
		});
	});
};

const updateUserCart = function (req, res, next) {
	let userId = req.params.userId;
	// let requestProduct = req.body;
	let { productId, color, size } = req.body;

	cartService.getCartByUserId(userId, function (err, cart) {
		if (err) return next(err);
		let oldCart = new CartClass(cart[0] || {});
		productController.getProductByID(productId, function (err, product) {
			if (err) return next(err);
			let newCart = oldCart.add(product, productId, { color, size });

			if (cart.length > 0) {
				cartService.updateCartByUserId(
					userId,
					{
						items: newCart.items,
						totalQty: newCart.totalQty,
						totalPrice: newCart.totalPrice,
						userId: userId,
					},
					function (err, result) {
						if (err) return next(err);
						res.json(result);
					}
				);
			} else {
				newCart = new CartClass({
					items: newCart.items,
					totalQty: newCart.totalQty,
					totalPrice: newCart.totalPrice,
					userId: userId,
				});
				cartService.createCart(newCart, function (err, resultCart) {
					if (err) return next(err);
					res.status(201).json(resultCart);
				});
			}
		});
	});
};

module.exports = { getUserCart, addToUserCart, updateUserCart };
