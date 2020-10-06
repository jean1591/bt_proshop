import React, { Fragment, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

// ACTIONS
import { listProducts } from "../action/productActions.js";

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
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
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
