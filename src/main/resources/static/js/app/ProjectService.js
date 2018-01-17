'use strict';

angular.module('crudApp').factory('ProjectService',
	[ '$localStorage', '$http', '$q', 'urls',
		function($localStorage, $http, $q, urls) {

			var factory = {
				loadAllprojects : loadAllprojects,
				getAllProjects : getAllProjects,
				getProject : getProject,
				createProject : createProject,
				updateProject : updateProject,
				removeProject : removeProject
			};

			return factory;

			function loadAllprojects() {
				console.log('Fetching all users');
				var deferred = $q.defer();
				$http.get(urls.PROJECT_SERVICE_API)
					.then(
						function(response) {
							console.log('Fetched successfully all users');
							$localStorage.users = response.data;
							deferred.resolve(response);
						},
						function(errResponse) {
							console.error('Error while loading users');
							deferred.reject(errResponse);
						}
				);
				return deferred.promise;
			}

			function getAllProjects() {
				return $localStorage.users;
			}

			function getProject(id) {
				console.log('Fetching User with id :' + id);
				var deferred = $q.defer();
				$http.get(urls.PROJECT_SERVICE_API + id)
					.then(
						function(response) {
							console.log('Fetched successfully User with id :' + id);
							deferred.resolve(response.data);
						},
						function(errResponse) {
							console.error('Error while loading project with id :' + id);
							deferred.reject(errResponse);
						}
				);
				return deferred.promise;
			}

			function createProject(project) {
				console.log('Creating User');
				var deferred = $q.defer();
				$http.post(urls.PROJECT_SERVICE_API, project)
					.then(
						function(response) {
							loadAllprojects();
							deferred.resolve(response.data);
						},
						function(errResponse) {
							console.error('Error while creating User : ' + errResponse.data.errorMessage);
							deferred.reject(errResponse);
						}
				);
				return deferred.promise;
			}

			function updateProject(project, id) {
				console.log('Updating User with id ' + id);
				var deferred = $q.defer();
				$http.put(urls.PROJECT_SERVICE_API + id, project)
					.then(
						function(response) {
							loadAllprojects();
							deferred.resolve(response.data);
						},
						function(errResponse) {
							console.error('Error while updating User with id :' + id);
							deferred.reject(errResponse);
						}
				);
				return deferred.promise;
			}

			function removeProject(id) {
				console.log('Removing User with id ' + id);
				var deferred = $q.defer();
				$http.delete(urls.PROJECT_SERVICE_API + id)
					.then(
						function(response) {
							loadAllprojects();
							deferred.resolve(response.data);
						},
						function(errResponse) {
							console.error('Error while removing User with id :' + id);
							deferred.reject(errResponse);
						}
				);
				return deferred.promise;
			}

		}
	]);