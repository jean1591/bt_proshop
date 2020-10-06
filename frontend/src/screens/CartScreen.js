import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";

// ACTIONS
import { addToCart } from "../action/cartActions";

// COMPONENTS
import Message from "../components/Message";

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id;
	const qty = location.search ? Number(location.search.split("=")[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(
		() => {
			if (productId) {
				dispatch(addToCart(productId, qty));
			}
		},
		[ dispatch, productId, qty ]
	);

	return <Fragment>Cart</Fragment>;
};

export default CartScreen;
