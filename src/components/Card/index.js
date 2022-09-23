import React, { useEffect, useState } from "react";
import DividerMobile from "../../static/images/pattern-divider-mobile.svg";
import DividerDesktop from "../../static/images/pattern-divider-desktop.svg";
import IconDice from "../../static/images/icon-dice.svg";
import "./styles.css";

const Card = ({ text, id }) => {
	const [divider, setDivider] = useState(DividerMobile);

	useEffect(() => {
		if (window.screen.width <= 700) {
			setDivider(DividerMobile);
		} else {
			setDivider(DividerDesktop);
		}
	}, []);

	return (
		<div className="Card">
			<h5>Advice #{id}</h5>
			<p>{text}</p>
			<img className="Card-divider" src={divider} alt="" />
			<button className="IconDice">
				<img src={IconDice} alt="Icon Dice" />
			</button>
		</div>
	);
};

export default Card;
