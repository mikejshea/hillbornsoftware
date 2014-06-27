angular.module('DirectivesApp.directives', []).
	directive('hello', function() {
		return {
			restrict: 'E',
			template: "<div>Hi there, I'm a directive that replaces &lt;hello&gt;</div>",
			replace: true
		};
	}
);