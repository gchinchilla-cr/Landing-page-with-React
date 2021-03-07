import React from "react";
import ReactDOM from "react-dom";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />

				<div className="row">
					<Card
						titulo="Card1"
						text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin..."
						img="https://placehold.it/400x275"
						btn="Find Out More!"
					/>
					<Card
						titulo="Card2"
						text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration i..."
						img="https://placehold.it/400x275"
						btn="Find Out More!"
					/>
					<Card
						titulo="Card3"
						text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections ..."
						img="https://placehold.it/400x275"
						btn="Find Out More!"
					/>
					<Card
						titulo="Card4"
						text="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this   ..."
						img="https://placehold.it/400x275"
						btn="Find Out More!"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
