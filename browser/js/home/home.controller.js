app.controller('HomeCtrl', function($scope, $state){
	$scope.feedback = {} //will contain .level and .playerCount

	//triggers when Play is clicked
	$scope.startGame = function(){
		//redirect to board state and feed the number of players and bit choice
		$state.go('board', {bitChoice: $scope.feedback.level, playerNum: $scope.feedback.playerCount});
	};

});
