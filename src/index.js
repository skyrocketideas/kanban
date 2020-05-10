import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// function Container() {
// 	return (
// 		<>
// 			<article>
// 				<Greeting name="Graeme" />
// 				<Greeting name="Johannah" />
// 				<Greeting name="Liv" />
// 				<City live="Dunfermline" love="rice" />
// 				<City love="peanuts" live="copenhagen" />
// 			</article>
// 			<section>
// 				<h3>Test</h3>
// 			</section>
// 		</>
// 	);
// }

// function Greeting(props) {
// 	return <h1>Hi {props.name}</h1>;
// }

// function City(props) {
// 	return (
// 		<>
// 			<h1>You live in {props.live}</h1>
// 			<h2>You love {props.love}</h2>
// 		</>
// 	);
// }

ReactDOM.render(<App />, document.getElementById("root"));
