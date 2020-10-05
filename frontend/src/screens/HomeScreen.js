import React, { Fragment } from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";

// COMPONENTS
import Product from "../components/Product";

const HomeScreen = () => {
	return (
		<Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</Fragment>
	);
};

export default HomeScreen;
