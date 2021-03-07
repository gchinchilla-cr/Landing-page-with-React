import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "17rem", margin: "3px" }}>
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.btn}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	text: PropTypes.string,
	titulo: PropTypes.string,
	img: PropTypes.string,
	btn: PropTypes.string
};
