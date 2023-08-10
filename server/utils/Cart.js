const cartModel = require("../models/Cart");

class Cart {
	constructor(initialCart) {
		this.userId = initialCart.userId || "";
		this.items = initialCart.items || {};
		this.totalQty = initialCart.totalQty || 0;
		this.totalPrice = initialCart.totalPrice || 0;
	}

	generateModel() {
		let newCart = new cartModel({
			userId: this.userId,
			items: this.items,
			totalQty: this.totalQty,
			totalPrice: this.totalPrice,
		});
		return newCart;
	}

	add(item, id) {
		let storedItem = this.items[id];
		if (!storedItem) {
			storedItem  = { item: item, qty: 0, price: 0 };
		}
		storedItem.qty++;
		storedItem.price = parseFloat((storedItem.item.price * storedItem.qty).toFixed(2));
		this.items[id] = storedItem;
		this.totalQty++;
		this.totalPrice += storedItem.item.price;
		this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
		return this;
	}

	increaseQty(id) {
		this.items[id].qty++;
		this.items[id].price += this.items[id].item.price;
		this.items[id].price = parseFloat(this.items[id].price.toFixed(2));
		this.totalQty++;
		this.totalPrice += this.items[id].item.price;
		this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
		return this;
	}

	decreaseQty(id) {
		this.items[id].qty--;
		this.items[id].price -= this.items[id].item.price;
		this.items[id].price = parseFloat(this.items[id].price.toFixed(2));
		this.totalQty--;
		this.totalPrice -= this.items[id].item.price;
		this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
		if (this.items[id].qty <= 0) {
			delete this.items[id];
		}
		return this;
	}

	generateArray() {
		let itemsArray = [];
		for (let id in this.items) {
			itemsArray.push(this.items[id]);
		}
		return itemsArray;
	}
}

module.exports = Cart;
