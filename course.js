// select the course list, level filter, and level sort elements
const courseList = document.getElementById('course-list');
const levelFilter = document.getElementById('level-filter');
const levelSort = document.getElementById('level-sort');

// select the search input and search button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// define an array of course
const courses = [
	{
		title: 'Computer Essentials',
		level: 'Level 1',
		code: 'CST8101',
		description: 'The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills.',
		image: '/img/CE.jpeg',
	},
	{
		title: 'Introduction to Computer Programming',
		level: 'Level 1',
		code: 'CST8116',
		description: 'Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field.',
		image: '/img/java.jpeg'
	},
	{
		title: 'Introduction to Database',
		level: 'Level 1',
		code: 'CST8215',
		description: 'Databases are used to store data and are a core component of many information technology systems.',
		image: '/img/database.jpeg'
	},
	{
		title: 'Database Systemse',
		level: 'Level 2',
		code: 'CST2355',
		description: 'Database systems can automate data processing tasks as well as tie into the security of information technology systems.',
		image: '/img/database system.jpeg'
	},
	{
		title: 'Operating System Fundamentals (GNU/Linux)',
		level: 'Level 2',
		code: 'CST8102',
		description: 'Database systeOperating systems form the backbone of information technology systems coordinating the interaction between hardware and software.',
		image: '/img/linux.jpeg'
	},
	{
		title: 'Object Oriented Programming (Java)',
		level: 'Level 2',
		code: 'CST8284',
		description: 'Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts.',
		image: '/img/oop.jpeg'
	},
	{
		title: 'Web Programming',
		level: 'Level 2',
		code: 'CST8285',
		description: 'Students develop basic skills of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity.',
		image: '/img/web.jpeg'
	},
	{
		title: 'Systems Analysis and Design',
		level: 'Level 3',
		code: 'CST2234',
		description: 'Guided by industry standard software engineering methodologies, students gain hands-on experience with case studies used to develop systems from inception through elaboration, construction and transition phases.',
		image: '/img/system analysis.jpeg'
	},
	{
		title: 'Mobile Graphical Interface Programming',
		level: 'Level 3',
		code: 'CST2335',
		description: 'Mobile devices play an instrumental part of everyday life, thus requiring knowledge of mobile graphical user interface development.',
		image: '/img/mobile.jpeg'
	},
	{
		title: 'Network Programming',
		level: 'Level 3',
		code: 'CST8109',
		description: 'Software programming in todays environment requires detailed knowledge of the underlying network topology, its implementation and programming support functions.',
		image: '/img/network.jpeg'
	},
	{
		title: 'Object Oriented Programming with Design Patterns',
		level: 'Level 3',
		code: 'CST8288',
		description: 'Design patterns are programming architecture solutions to common challenges faced in software implementation.',
		image: '/img/patterns.jpeg'
	},
	{
		title: 'Advanced Database Topics',
		level: 'Level 4',
		code: 'CST8276',
		description: 'Database administration is an important role, in particular for deployed information technology systems.',
		image: '/img/advanced database.jpeg'
	},
	{
		title: 'Enterprise Application Programmings',
		level: 'Level 4',
		code: 'CST8277',
		description: 'Enterprise applications connect clients to services that are based on data stored in database management systems.',
		image: '/img/enterprise.jpeg'
	},
	{
		title: 'Programming Language Research Project',
		level: 'Level 4',
		code: 'CST8333',
		description: 'Learning a new programming language or framework on your own is a challenge faced by programmers on the job as part of their career.',
		image: '/img/language.jpeg'
	},
	{
		title: 'Software Development Projectt',
		level: 'Level 4',
		code: 'CST8334',
		description: 'Following the agile software engineering methodology, teams work with clients to analyze business needs, determine computer system requirements, model system designs, build prototypes, test code and deliver final products.',
		image: '/img/software.jpeg'
	}
];

// Function to generate HTML for one course
function generateCourseHTML(course) {
	return `
		<li data-level="${course.level}">
		<div class="container">
		    <div class="image">
			<img class="photo" src="${course.image}" alt="${course.title}">
			<h3>${course.title}</h3>
		    </div>
			<div class="text">
			<p class="width">${course.level}</p>
			<p>${course.code}</p>
			<p>${course.description}</p>
			</div>
		</div>
		</li>
	`
}
// Function to generate HTML for the entire course list
function generateCourseListHTML(courses) {
	return courses.map(course => generateCourseHTML(course)).join('');
}

// Function to initialize the webpage
function init() {
	// Display the course list on page load
	courseList.innerHTML = generateCourseListHTML(courses);

	// Event listener for the search button
	searchButton.addEventListener('click', () => {
		const searchValue = searchInput.value.toLowerCase();
		const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchValue));
		courseList.innerHTML = generateCourseListHTML(filteredCourses);
	});

	// Event listener for the level filter dropdown
	levelFilter.addEventListener('change', () => {
		const selectedLevel = levelFilter.value;
		if (selectedLevel === 'all') {
			courseList.innerHTML = generateCourseListHTML(courses);
		} else {
			const filteredCourses = courses.filter(course => course.level === selectedLevel);
			courseList.innerHTML = generateCourseListHTML(filteredCourses);
		}
	});

	// Event listener for the level sort dropdown
	levelSort.addEventListener('change', () => {
		const sortOption = levelSort.value;
		if (sortOption === 'low-to-high') {
			courses.sort((a, b) => a.level.localeCompare(b.level));
		} else {
			courses.sort((a, b) => b.level.localeCompare(a.level));
		}
		courseList.innerHTML = generateCourseListHTML(courses);
	});
}

// Event listener to initialize the webpage on load
window.addEventListener('load', init);
