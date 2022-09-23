import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { getAdvice } from "../../services/getAdvice";
import "./styles.css";

const Home = () => {
	const [advice, setAdvice] = useState({});

	useEffect(() => {
		getAdvice().then((data) => {
			setAdvice(data);
		});
	}, []);

	return (
		<section className="Home">
			<Card text={advice.advice} id={advice.id}/>
			<div className="attribution">
				Challenge by
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by
				<a
					href="https://github.com/michaelviloria"
					target="_blank"
					rel="noreferrer"
				>
					Michael Viloria
				</a>
				.
			</div>
		</section>
	);
};

export default Home;
