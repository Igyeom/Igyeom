function getIndex(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cabo Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
let selectionBox = document.getElementById("country-select-1");
let teamBox = document.getElementById("team-select-1");
let countries_html = document.getElementById("countries");

let added_country_list = [];
let colors_alt = ["red", "green"];
let colors = ["red", "green"];
let s = 0;
let e = 0;

function add() {
	if (added_country_list.includes(selectionBox.options[selectionBox.selectedIndex].text)) return;
    added_country_list.push(selectionBox.options[selectionBox.selectedIndex].text);
    countries_html.innerHTML += "<div class='country " + teamBox.options[teamBox.selectedIndex].value + "'>" + selectionBox.options[selectionBox.selectedIndex].text + "</div>"
}

function roll() {
	let country = getIndex(0, 197);
	while (added_country_list.includes(countries[country])) {
		country = getIndex(0, 197);
	}
	added_country_list.push(countries[country]);
	countries_html.innerHTML += "<div class='country " + colors[getIndex(0, colors.length)] + "'>" + countries[country] + "</div>"
}

function generate() {
	let events = document.getElementById('events');
	let red = document.getElementsByClassName('red');
	let green = document.getElementsByClassName('green');
	let blue = document.getElementsByClassName('blue');
	let yellow = document.getElementsByClassName('yellow');

	events.innerHTML = '';
	
	let r = []; let g = []; let b = []; let y = [];


	for (i of red) {
		r.push(i.innerHTML);
	}
	for (i of green) {
		g.push(i.innerHTML);
	}
	for (i of blue) {
		b.push(i.innerHTML);
	}
	for (i of yellow) {
		y.push(i.innerHTML);
	}
	
	let battles = [];
	for (let year = s; year <= e; year++) {
		for (let i = 0; i < getIndex(10, 20); i++) {
			let type = getIndex(0, 6);
			if (type == 0) {
				battles.push([r[getIndex(0, r.length)], g[getIndex(0, g.length)]]);
				events.innerHTML += "<div class='event battle'>⚔️ A battle has begun between <b>" + battles[battles.length-1][0] + "</b> and <b>" + battles[battles.length-1][1] + "</b>!</div>";
			} else if (type == 1 && battles.length > 0) {
				events.innerHTML += "<div class='event surrender'>☠️ <b>" + battles[battles.length-1][0] + "</b> has surrendered against <b>" + battles[battles.length-1][1] + "</b>!</div>";
				r.pop(battles[battles.length-1][0]);
				battles.pop();
			} else if (type == 2 && battles.length > 0) {
				events.innerHTML += "<div class='event surrender'>☠️ <b>" + battles[battles.length-1][1] + "</b> has surrendered against <b>" + battles[battles.length-1][0] + "</b>!</div>";
				g.pop(battles[battles.length-1][1]);
				battles.pop();
			}
			if (r.length == 0) {
				events.innerHTML += "<div class='event elimination'>❌ The Reds have officially lost the war.</div>";
				
				document.getElementById('events_count') = document.getElementsByClassName('event').length
				document.getElementById('battles_count') = document.getElementsByClassName('battle').length
				return;
			}
			if (g.length == 0) {
				events.innerHTML += "<div class='event elimination'>❌ The Greens have officially lost the war.</div>";
				
				document.getElementById('events_count').innerHTML = document.getElementsByClassName('event').length
				document.getElementById('battles_count').innerHTML = document.getElementsByClassName('battle').length
				return;
			}
		}
		events.innerHTML += "<div class='event newyear'>📅 Happy New Year! It is now the year " + year + ".</div>";
	}
	document.getElementById('events_count').innerHTML = document.getElementsByClassName('event').length
	document.getElementById('battles_count').innerHTML = document.getElementsByClassName('battle').length
}


for (i of countries) {
    selectionBox.innerHTML += "<option value='" + i + "'>" + i + "</option>";
}
