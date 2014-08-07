var firstNames = ['Mike','Mark','Lisa','Mary','Tim','Joe'];
var lastNames = ['Smith', 'Taylor', 'Baker', 'Cook', 'Shoemaker', 'Coder'];
var courseBeginnings = ['Introduction to', 'Science of', 'Art of', '', 'Love for', 'Appreciate', 'Learn', 'Advanced'];
var courseEndings = ['Basket Weaving', 'Diet Foods', 'Angular.JS!', 'Love', 'Nothing', 'jQuery', 'Atari', 'Pottery'];

function randomCombinations(first, second, howmany) {
	var list = [];
	var string = '';
	for (var i = 0; i < howmany; i++) {
		string += first[Math.round(Math.random()*(first.length-1))] + " " + second[Math.round(Math.random()*(second.length-1))];
		list.push(string);
		string = "";
	}
	return list;
}
function createStudentsFromList(list) {
	var studentList = [];
	for (index in list) {
		studentList.push(new Student(list[index]));
	}
	return studentList;
}
function createCoursesFromList(list) {
	var courseList = [];
	for (index in list) {
		courseList.push(new Course(list[index]));
	}
	return courseList;
}

var courses = {
	name : "Course",
	data : createCoursesFromList(randomCombinations(courseBeginnings, courseEndings, 10)),
	selected : null
};

var students = {
	name : "Student",
	data : createStudentsFromList(randomCombinations(firstNames, lastNames, 10)),
	selected : null
};

// var enrollments = [];