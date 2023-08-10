const express = require("express");
const paypal = require("paypal-rest-sdk");
const paypal_config = require("../configs/payment.config");
const verifyToken = require("../middlewares/verifyToken");
const CartClass = require("../utils/Cart");
const CustomError = require("../utils/customError");
const categorizeQueryString = require("../utils/categorizeQueryString");
const generateFilterResultArray = require("../utils/generateFilterResultArray");
const cartController = require("../controllers/cartController");
const productController = require("../controllers/productController");


const router = express.Router();

router.get("/search", function (req, res, next) {
	const { query, order } = categorizeQueryString(req.query);
	query["department"] = query["query"];
	delete query["query"];
	productController.getProductByDepartment(query, order, function (err, p) {
		if (err) return next(err);
		if (p.length > 0) {
			return res.json({ products: p });
		} else {
			query["category"] = query["department"];
			delete query["department"];
			productController.getProductByCategory(query, order, function (err, p) {
				if (err) return next(err);
				if (p.length > 0) {
					return res.json({ products: p });
				} else {
					query["title"] = query["category"];
					delete query["category"];
					productController.getProductByTitle(query, order, function (err, p) {
						if (err) return next(err);
						if (p.length > 0) {
							return res.json({ products: p });
						} else {
							query["id"] = query["title"];
							delete query["title"];
							productController.getProductByID(query.id, function (err, p) {
								let error = new CustomError("Search Error", 404, "not_found", { message: "no product exist" });
								if (err) {
									return next(error);
								}
								if (p) {
									return res.json({
										products: p,
									});
								} else {
									return next(error);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.get("/filter", function (req, res, next) {
	let result = {};
	let query = req.query.query;
	productController.filterProductByDepartment(query, function (err, p) {
		if (err) return next(err);
		if (p.length > 0) {
			result["department"] = generateFilterResultArray(p, "department");
		}
		productController.filterProductByCategory(query, function (err, p) {
			if (err) return next(err);
			if (p.length > 0) {
				result["category"] = generateFilterResultArray(p, "category");
			}
			productController.filterProductByTitle(query, function (err, p) {
				if (err) return next(err);
				if (p.length > 0) {
					result["title"] = generateFilterResultArray(p, "title");
				}
				if (Object.keys(result).length > 0) {
					return res.json({ filter: result });
				} else {
					let error = new CustomError("Search Error", 404, "not_found", {
						message: "no product exist",
					});
					return next(error);
				}
			});
		});
	});
});

router.get("/checkout/:cartId", verifyToken, function (req, res, next) {
	const cartId = req.params.cartId;
	const frontURL = "https://zack-ecommerce-reactjs.herokuapp.com";
	// const frontURL = 'http://localhost:3000'

	cartController.getCartById(cartId, function (err, c) {
		if (err) return next(err);
		if (!c) {
			let err = new CustomError("Checkout Error", 400, "invalid_field", {
				message: "cart not found",
			});
			return next(err);
		}
		const items_arr = new CartClass(c).generateArray();
		const paypal_list = [];
		for (const i of items_arr) {
			paypal_list.push({
				name: i.item.title,
				price: i.item.price,
				currency: "CAD",
				quantity: i.qty,
			});
		}
		const create_payment_json = {
			intent: "sale",
			payer: {
				payment_method: "paypal",
			},
			redirect_urls: {
				return_url: frontURL + "/success_page",
				cancel_url: frontURL + "/cancel_page",
			},
			transactions: [
				{
					item_list: {
						items: paypal_list,
					},
					amount: {
						currency: "CAD",
						total: c.totalPrice,
					},
					description: "This is the payment description.",
				},
			],
		};
		paypal.configure(paypal_config);
		paypal.payment.create(create_payment_json, function (error, payment) {
			if (error) {
				console.log(JSON.stringify(error));
				return next(error);
			} else {
				console.log(payment);
				for (const link of payment.links) {
					if (link.rel === "approval_url") {
						res.json(link.href);
					}
				}
			}
		});
	});
});

router.get("/payment/success", verifyToken, function (req, res, next) {
	var paymentId = req.query.paymentId;
	var payerId = { payer_id: req.query.PayerID };
	paypal.payment.execute(paymentId, payerId, function (error, payment) {
		if (error) {
			console.error(JSON.stringify(error));
			return next(error);
		} else {
			if (payment.state == "approved") {
				console.log("payment completed successfully");
				console.log(payment);
				res.json({ payment });
			} else {
				console.log("payment not successful");
			}
		}
	});
});

module.exports = router;
