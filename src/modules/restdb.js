const url = "https://todolist-27a8.restdb.io/rest/tasks";
const APIKey = "5ea19c0d919b360ce59b7c44";

export function getCards(callback) {
	fetch(url, {
		method: "get",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"x-apikey": APIKey,
			"cache-control": "no-cache",
		},
	})
		.then((e) => e.json())
		.then((data) => callback(data));
}

export function addCard(callback, cards, data) {
	const postData = JSON.stringify(data);
	fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"x-apikey": APIKey,
			"cache-control": "no-cache",
		},
		body: postData,
	})
		.then((res) => res.json())
		.then((response) => callback(cards.concat(response)));
}

function moveCard(data, id) {
	let postData = JSON.stringify(data);

	fetch(url + "/" + id, {
		method: "put",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"x-apikey": APIKey,
			"cache-control": "no-cache",
		},
		body: postData,
	})
		.then((d) => d.json())
		.then((t) => console.log(t));
}

function deleteCard(id) {
	fetch(url + "/" + id, {
		method: "delete",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"x-apikey": APIKey,
			"cache-control": "no-cache",
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
}

export const RestDB = {
	getCards,
	addCard,
	moveCard,
	deleteCard,
};
