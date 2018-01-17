'use strict';

angular.module('crudApp').controller('ProjectController',
	[ 'ProjectService', '$scope', function(ProjectService, $scope) {

		var self = this;
		self.project = {};
		self.projects = [];

		self.submit = submit;
		self.getAllProjects = getAllProjects;
		self.createProject = createProject;
		self.updateProject = updateProject;
		self.removeProject = removeProject;
		self.editProject = editProject;
		self.reset = reset;

		self.successMessage = '';
		self.errorMessage = '';
		self.done = false;

		self.onlyIntegers = /^\d+$/;
		self.onlyNumbers = /^\d+([,.]\d+)?$/;

		function submit() {
			console.log('Submitting');
			if (self.project.id === undefined || self.project.id === null) {
				console.log('Saving New Project', self.project);
				createProject(self.project);
			} else {
				updateProject(self.project, self.project.id);
				console.log('Project updated with id ', self.project.id);
			}
		}

		function createProject(project) {
			console.log('About to create project');
			ProjectService.createProject(project)
				.then(
					function(response) {
						console.log('Project created successfully');
						self.successMessage = 'Project created successfully';
						self.errorMessage = '';
						self.done = true;
						self.project = {};
						$scope.myForm.$setPristine();
					},
					function(errResponse) {
						console.error('Error while creating Project');
						self.errorMessage = 'Error while creating Project: ' + errResponse.data.errorMessage;
						self.successMessage = '';
					}
			);
		}

		function updateProject(project, id) {
			console.log('About to update project');
			ProjectService.updateProject(project, id)
				.then(
					function(response) {
						console.log('Project updated successfully');
						self.successMessage = 'Project updated successfully';
						self.errorMessage = '';
						self.done = true;
						$scope.myForm.$setPristine();
					},
					function(errResponse) {
						console.error('Error while updating Project');
						self.errorMessage = 'Error while updating Project ' + errResponse.data;
						self.successMessage = '';
					}
			);
		}

		function removeProject(id) {
			console.log('About to remove Project with id ' + id);
			ProjectService.removeProject(id)
				.then(
					function() {
						console.log('Project ' + id + ' removed successfully');
					},
					function(errResponse) {
						console.error('Error while removing project ' + id + ', Error :' + errResponse.data);
					}
			);
		}

		function getAllProjects() {
			return ProjectService.getAllProjects();
		}

		function editProject(id) {
			self.successMessage = '';
			self.errorMessage = '';
			ProjectService.getProject(id).then(
				function(project) {
					self.project = project;
				},
				function(errResponse) {
					console.error('Error while removing project ' + id + ', Error :' + errResponse.data);
				}
			);
		}

		function reset() {
			self.successMessage = '';
			self.errorMessage = '';
			self.project = {};
			$scope.myForm.$setPristine(); //reset Form
		}
	}


	]);