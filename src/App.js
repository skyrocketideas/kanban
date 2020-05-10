import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { RestDB } from "./modules/restdb";

export default function App() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		RestDB.getCards(setCards);
	}, []);

	function onFormSubmit(data) {
		console.log("form submitted", data);
		RestDB.addCard(setCards, cards, data);
	}

	function onCardMove(_id, whereTo) {
		console.log(_id, whereTo);
		const nextCards = cards.map((card) => {
			if (card._id === _id) {
				card.list = whereTo;
			}
			return card;
		});
		RestDB.moveCard({ list: whereTo }, _id);
		setCards(nextCards);
	}

	function onCardDelete(_id) {
		const nextCards = cards.filter((card) => card._id !== _id);
		RestDB.deleteCard(_id);
		setCards(nextCards);
	}

	return (
		<div className="App">
			<Nav />
			{/* <button
				onClick={() =>
					setCards(
						cards.concat({
							title: "OMG, d_id that just happen?",
							list: "todo",
							added: Date.now(),
							_id: Math.random(),
							color: "lightblue",
							assignedTo: ["jofh"],
						})
					)
				}
			>
				Bingo
			</button> */}

			{cards.length === 0 && <h2>Loading</h2>}

			<Main
				onCardDelete={onCardDelete}
				onCardMove={onCardMove}
				onFormSubmit={onFormSubmit}
				cards={cards}
			/>
		</div>
	);
}
