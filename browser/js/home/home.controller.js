app.controller('HomeCtrl', function($scope, $state){
	$scope.feedback = {} //will contain .level and .playerCount

	//triggers when Play is clicked
	$scope.startGame = function(){
		//determine how many tiles are needed per board based on bit number chosen
		// var tileCount =  Math.log2($scope.feedback.level)+1; 
	
		//redirect to board state and feed the number of players and bit choice
		$state.go('board', {bitChoice: $scope.feedback.level, playerNum: $scope.feedback.playerCount});
	};

});
