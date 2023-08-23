const partyList = document.querySelector(".party_list");
let groupOfParties = [];
let groupOfDelete = [];

const getParties = async () => {
	const response = await fetch(
		`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-CPU-RM-WEB-PT/events`
	);
	const data = await response.json();
	return data;
};

const deleteFeature = (e) => {
	const partyGroup = e.target.parentNode;
	const ask = prompt(
		"Are you sure you want to delete this party? (Yes/No)"
	);

	if (ask === "Yes") {
		console.log(partyGroup);
		partyGroup.innerText = "";
		partyGroup.style = "border-bottom: 0px";
	} else {
		return;
	}
};

const renderParties = (data) => {
	data.forEach((party) => {
		const deleteButton = document.createElement("button");
		deleteButton.innerText = `Delete Party?`;
		deleteButton.classList.add(`delete_party`);
		deleteButton.classList.add(`delete_${party.id}`);

		const li = document.createElement("li");
		li.classList.add(`party_group`);
		li.innerText = `name: ${party.name}\n date: ${party.date}\n location: ${party.location}\n description: ${party.description}`;

		li.appendChild(deleteButton);

		partyList.appendChild(li);

		deleteButton.addEventListener("click", deleteFeature);
	});
};

getParties()
	.then((res) => {
		renderParties(res.data);
	})
	.catch((err) => {
		console.error(err.message);
	});

const partyGroups = document.getElementsByTagName("li");

const deleteParties =
	document.getElementsByTagName("button");
