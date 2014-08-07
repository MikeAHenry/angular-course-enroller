var Course = function(name) {
	this.students = [];
	this.name = name;
	this.id = Course.counter++;
	this.on = true;
	this.addStudent = function(student) {
		this.students.push(student);
	}

	this.removeStudent = function(student){
		var index = this.students.indexOf(student);
		if (index > -1)
			this.students.splice(index, 1);
	}
};
Course.counter = 0;



var Student = function(name) {
	this.courses = [];
	this.name = name;
	this.id = Student.counter++;
	this.on = true;
	this.addCourse = function(course) {
		this.courses.push(course);
	}
	this.removeCourse = function(course){
		var index = this.courses.indexOf(course);
		if (index > -1)
			this.courses.splice(index, 1);
		
	}
};
Student.counter = 0;




var Instructor = function(name) {
	this.name = name;
	this.id = Instructor.counter++;
	this.on = true;
};
Instructor.counter = 0;









// var Enrollment = function(student, course) {
// 	this.student = student;
// 	this.course = course;
// }