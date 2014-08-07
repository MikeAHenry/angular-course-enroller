(function() {
	
	var app = angular.module("enrollment", [ ]);

	
	app.controller("CourseController", function() {
		var _coursesController = new DataController(courses);
		_coursesController.add = function(name) {
			if (name != '' && name != undefined)
				courses.data.push(new Course(name));
		};
		return _coursesController; 
	});
	app.controller("StudentController", function() {
		var _studentsController = new DataController(students);
		_studentsController.add = function(name) {
			if (name != '' && name != undefined)
				students.data.push(new Student(name));
		};
		return _studentsController; 
	});
	app.controller("EnrollmentController", function() {
		this.enroll = function() {
			if (this.canEnroll()) {
				students.selected.addCourse(courses.selected);
				courses.selected.addStudent(students.selected);
			}
		};
		
		this.itemsSelected = function() {
			return students.selected != null 
				&& courses.selected != null;
		}
		
		this.canEnroll = function() {
			return this.itemsSelected()
				&& students.selected.courses.indexOf(courses.selected) < 0 
				&& courses.selected.students.indexOf(students.selected) < 0;
		};
		this.unEnroll = function() {
			students.selected.removeCourse(courses.selected);
			courses.selected.removeStudent(students.selected);
		}
	});
	
	app.directive("nameIdTable", function() {
		return {
			restrict: 'E',
			templateUrl: './templates/name-id-table.html'
		}
	});
	
	
	
	
	
	function DataController(model) {
		this.name = model.name;
		this.data = model.data;
		this.hide = function(object) {
			object.on = false;
			if (this.isSelected(object)){
				model.selected = null;
			}
		};
		this.showAll = function() {
			for (var i = 0; i < this.data.length; i++) {
				this.data[i].on = true;
			}
		};
		this.select = function(object) {
			model.selected = object;
			// alert(this.selectedObject.name);
		}
		this.isSelected = function(object) {
			return object == model.selected;
		}
		this.getSelected = function() {
			return model.selected;
		}
	};

	
})();