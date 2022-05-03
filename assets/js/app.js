const reviews = [
	{
		id: 1,
		name: 'Maria Chiara Barabro',
		job: 'Marketing & Growth',
		img: 'https://www.90days.it/img/barbaro_mariachiara.png',
		text:
			'MariaChiara lavora da un anno e mezzo per parkingmycar.it  come digital strategist. Cura la strategia di crescita e coordina le risorse del reparto marketing. Ha competenze verticali su Growth marketing, Analytics e adv su Google.',
	},
	{
		id: 2,
		name: 'Camilla Tofani',
		job: 'Full Stack Developer',
		img: 'https://www.90days.it/img/tofani_camilla.png',
		text:
			'Camilla lavora come sviluppatrice da diversi anni e ha collaborato con piccole e grandi aziende. Sviluppa soluzioni end to end occupandosi talvolta anche dello studio e implementazione della UX e della UI.',
	},
	{
		id: 3,
		name: 'Chiara Gulino',
		job: 'Research & UX',
		img: 'https://www.90days.it/img/gulino_chiara.png',
		text:
			'Chiara studia attualmente Human-Computer Interaction all\'università di Trento. Ha partecipato a diverse competizioni internazionali e locali, facendo esperienza di collaborazione sia con l\'università che con aziende per migliorare e rendere accessibili servizi già esistenti.',
	},
	{
		id: 4,
		name: 'Bonsi',
		job: 'Mascotte',
		img: 'https://www.camillatofani.it/study/javascript/bonsi.png',
		text:
			'Bonsi è la mascotte per eccellenza.',
	}
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-button');

// dark mode

const darkBtn = document.querySelector('.dark-btn');

// set starting item

let currentItem = 0;

// load initial value

window.addEventListener('DOMContentLoaded', function () {
	showPerson();
});

// show person based on item

function showPerson() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
};

// show next person

nextBtn.addEventListener('click', function () {
	currentItem++;
	if (currentItem > reviews.length-1) {
		currentItem = 0;
	}
	showPerson();
});

// show prev person

prevBtn.addEventListener('click', function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length-1;
	}
	showPerson();
});

// show random person

randomBtn.addEventListener('click', function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson();
});
