import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Breadcrumb, Pagination } from "react-bootstrap";
import Product from "../../components/Products/Product";
import Auth from "../../modules/Authentication";
import Filter from "./Filter";
import { getAllProducts, getFilteredResults, updateCartItems } from "../../redux/actions";

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: this.props.products,
			productsBAK: this.props.products,
			departments: this.props.departments,
			modalShow: false,
			login: true,
		};
		this.addToBag = this.addToBag.bind(this);
	}
	componentDidMount() {
		if (!this.props.products) {
			this.props.getAllProducts();
		}
	}
	showHideModal = () => {
		this.setState({ modalShow: false });
	};

	loginClicked = () => {
		this.setState({ modalShow: true, login: true });
	};
	registerClicked = () => {
		this.setState({ modalShow: true, login: false });
	};

	addToBag = (params) => {
		if (Auth.getUserDetails() !== undefined && Auth.getUserDetails() !== null && Auth.getToken() !== undefined) {
			let cart = this.props.updateCartItems(params);
			cart.then((res) => {
				console.log(res);
			});
		} else {
			this.setState({ modalShow: true });
		}
	};

	render() {
		const { products, getFilteredResults } = this.props;

		return (
			<Container>
				<Row>
					<Breadcrumb>
						<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
						<Breadcrumb.Item href="/">{this.props.location.pathname.split("/")[2]}</Breadcrumb.Item>
						<Breadcrumb.Item href="#">{this.props.location.pathname.split("/")[3]}</Breadcrumb.Item>
					</Breadcrumb>

					{/* <div className="sidebar">
							<Filter getFilteredResults={getFilteredResults} />
					</div>
					<Row>
						<ul className="product_sorting">
							<li>
								<span className="type_sorting_text">Default Sorting</span>
								<i className="fa fa-angle-down"></i>
								<ul className="sorting_type">
									<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'>
										<span>Default Sorting</span>
									</li>
									<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'>
										<span>Price</span>
									</li>
									<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'>
										<span>Product Name</span>
									</li>
								</ul>
							</li>
							<li>
								<span>Show</span>
								<span className="num_sorting_text">6</span>
								<i className="fa fa-angle-down"></i>
								<ul className="sorting_num">
									<li className="num_sorting_btn">
										<span>6</span>
									</li>
									<li className="num_sorting_btn">
										<span>12</span>
									</li>
									<li className="num_sorting_btn">
										<span>24</span>
									</li>
								</ul>
							</li>
						</ul>
						<div className="pages d-flex flex-row align-items-center">
							<div className="page_current">
								<span>1</span>
								<ul className="page_selection">
									<li>
										<a href="#">1</a>
									</li>
									<li>
										<a href="#">2</a>
									</li>
									<li>
										<a href="#">3</a>
									</li>
								</ul>
							</div>
							<div className="page_total">
								<span>of</span> 3
							</div>
							<div id="next_page" className="page_next">
								<a href="#">
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</Row> */}

					<Row>
						{products &&
							products.slice(0, 8).map((item, index) => {
								return (
									<div className="col-lg-3 col-sm-6" key={index} data-aos="zoom-in">
										<Product productItem={item} addToBag={this.addToBag} />
									</div>
								);
							})}
					</Row>
				</Row>
				<Row>
					<Pagination className="w-50 mx-auto">
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Ellipsis />

						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Item>{11}</Pagination.Item>
						<Pagination.Item active>{12}</Pagination.Item>
						<Pagination.Item>{13}</Pagination.Item>
						<Pagination.Item disabled>{14}</Pagination.Item>

						<Pagination.Ellipsis />
						<Pagination.Item>{20}</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</Row>
			</Container>
		);
	}
}

const mapStoreToProps = (state) => ({
	products: state.product.products,
	loading: state.product.productLoading,
});
const mapDispatchToProps = {
	getAllProducts,
	getFilteredResults,
	updateCartItems,
};

export default connect(mapStoreToProps, mapDispatchToProps)(Category);
