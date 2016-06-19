app.controller('NavbarCtrl', function($scope, $location, $state){
	$scope.newGame = function(){
		var path = $location.path();
		var pathIndex = path.match(/\/board\/(\d+)\/(\d+)/);	
		var level = pathIndex[1];
		var playerCount = pathIndex[2];
		$state.go('board', {bitChoice: level, playerNum: playerCount}, {reload: true});
	};
	$scope.nextLevel = function(){
		var path = $location.path();
		var pathIndex = path.match(/\/board\/(\d+)\/(\d+)/);	
		var level = +pathIndex[1] +1;
		var playerCount = pathIndex[2];
		$state.go('board', {bitChoice: level, playerNum: playerCount}, {reload: true});

	};

});