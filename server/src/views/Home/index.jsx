import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../../modules/Authentication";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import Benefit from "../../components/Benefit";
import BestSeller from "../../components/Products/BestSellers";
// import Advertisement from "../../components/Advertisement";
import { getAllProducts, getFilteredResults, updateCartItems, refreshLogin } from "../../redux/actions";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.addToCart = this.addToCart.bind(this);
	}

	componentDidMount() {
		if (Auth.getUserToken()) {
			this.props.refreshLogin();
		}
		if (!this.props.products) {
			this.props.getAllProducts();
		}
	}

	addToCart = (params) => {
		if (Auth.getUserToken() !== undefined) {
			this.props.updateCartItems(params);
		} else {
			console.log("Unable to add item to cart...!");
		}
	};

	render() {
		const { products, departments } = this.props;

		return (
			<div>
				<HomeBanner />
				<CategoryBanner />
				{products && <NewArrivals products={products} departments={departments} addToCart={this.addToCart} />}
				<Benefit />
				{products && <BestSeller products={products} departments={departments} addToCart={this.addToCart} />}
				{/* <Advertisement /> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.product.products,
	departments: state.department.departments,
});

const mapDispatchToProps = {
	refreshLogin,
	getAllProducts,
	getFilteredResults,
	updateCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
