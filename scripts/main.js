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
let max = 85;
let min = 30;
let result = [];
console.table(persons);
/* function forEach */
/*
persons.forEach(person=>{
	if (person.rate>min && person.rate<max) {
		result.push(person);
	}
});*/
/* function filter */
function rangePrise(person){
	return person.rate>min && person.rate<max;
};
result = persons.filter(rangePrise);

console.table(result);
/* creating table on a page*/
result.forEach(person=>{
	let row = document.createElement("tr");
	let th = document.createElement("th");
	let td = document.createElement("td");
	th.textContent = person.name;
	td.textContent = person.rate;
	row.appendChild(th);
	row.appendChild(td);
	tbody.appendChild(row);
});