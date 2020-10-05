import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSreen from "./screens/HomeScreen";

const App = () => {
	return (
		<Fragment>
			<Header />
			<main className="py-3">
				<Container>
					<HomeSreen />
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
};

export default App;
