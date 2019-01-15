"use strict"
let persons = [
	{name:"John", rate: 50},
	{name:"Anna", rate: 115},
	{name:"Frieda", rate: 20},
	{name:"Lucielle", rate: 80},
	{name:"Jan", rate: 70},
	{name:"Bob", rate: 25},
	{name:"Isabella", rate: 60},
	{name:"Mary", rate: 75},
];
let tbody = document.querySelector('tbody');
let minVal = document.getElementById('minVal');
let maxVal = document.getElementById('maxVal');
let max = 0;
let min = 0;
let result = [];
let rows = [];

persons.forEach(person=>{
	/* getting MIN MAX values */
	if (person.rate > max) max = person.rate;
	if (min === 0) min = person.rate;
	else if (person.rate < min) min = person.rate;
	/* creating table on a page*/
	let row = document.createElement("tr");
	let th = document.createElement("th");
	let td = document.createElement("td");
	th.textContent = person.name;
	td.textContent = person.rate;
	row.appendChild(th);
	row.appendChild(td);
	tbody.appendChild(row);
	rows.push({"person":person,element:row});
});

minVal.value = min;
maxVal.value = max;