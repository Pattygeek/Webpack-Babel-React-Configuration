// import React, { useState } from "react";
// import { render } from "react-dom";

console.log(process.env.SECRET);

const getUserModule = () =>
	import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");

// function App() {
// 	const [state, setState] = useState("Click");
// 	return <button onClick={() => setState("Clicked")}>{state}</button>;
// }
// render(<App />, document.getElementById("root"));
// import { getUsers } from "./common/usersAPI";
// import "./style.scss";

// getUsers().then((json) => console.log(json));

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	getUserModule().then(({ getUsers }) => {
		getUsers().then((json) => console.log(json));
	});
});
