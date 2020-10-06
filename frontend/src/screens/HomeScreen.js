import React, { Fragment, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Product from "../components/Product";

// REDUCER
import { listProducts } from "../action/productActions.js";
import { productListReducer } from "../reducers/productReducers";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(
		() => {
			dispatch(listProducts());
		},
		[ dispatch ]
	);

	return (
		<Fragment>
			<h1>Latest Products</h1>
			{loading ? (
				<h3>Loading...</h3>
			) : error ? (
				<h3>{error}</h3>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</Fragment>
	);
};

export default HomeScreen;
