var app = angular.module('crudApp', [ 'ui.router', 'ngStorage' ]);

app.constant('urls', {
	BASE : 'http://localhost:8080/NorsysEasyManagerApp',
	PROJECT_SERVICE_API : 'http://localhost:8080/NorsysEasyManagerApp/api/user/'
});

app.config([ '$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url : '/',
				templateUrl : 'partials/list',
				controller : 'ProjectController',
				controllerAs : 'ctrl',
				resolve : {
					users : function($q, ProjectService) {
						console.log('Load all projects');
						var deferred = $q.defer();
						ProjectService.loadAllprojects().then(deferred.resolve, deferred.resolve);
						return deferred.promise;
					}
				}
			});
		$urlRouterProvider.otherwise('/');
	} ]);