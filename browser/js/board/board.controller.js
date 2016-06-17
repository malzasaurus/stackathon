app.controller('BoardCtrl', function($scope, $stateParams, players, randomNum){

	// $scope.board = board; //created in the state resolve function
	$scope.players = players; //created in the state resolve function
	// $scope.currentTot = 0; //update this, need to add up value properties on the board
	$scope.targetNum = randomNum; //determined in the state resolve function
	$scope.message = "";

	$scope.increaseScore = function(player, tile){
		console.log('increasing by ', tile.bit);
		if(tile.position===0){
			player.currentTot += tile.bit;
			tile.position=1;
		} 
		if(player.currentTot===$scope.targetNum){
			$scope.message = 'Player '+ player.playerID+' WON!!!';
		}
	};
	$scope.decreaseScore = function(player, tile){
		console.log('decreasing by ', tile.bit);
		if(tile.position===1){
			player.currentTot -= tile.bit;
			tile.position=0;
		} 
		if(player.currentTot===$scope.targetNum){
			$scope.message = 'Player '+ player.playerID+' WON!!!';
		}
	};
//could make this a toggle function instead

});