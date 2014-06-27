angular.module('DirectivesApp.controllers', []).
	
	controller('appController', function($scope) {
		$scope.message = "I'm from the $scope.message in the controller";
	}
);