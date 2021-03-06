//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import { Home } from "./component/home";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

export function Index() {
	return (
		<div className="container-fluid">
			<Home />
		</div>
	);
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
