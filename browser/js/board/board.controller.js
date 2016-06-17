app.controller('BoardCtrl', function($scope, $stateParams, players, board, randomNum){

	$scope.board = board; //created in the state resolve function
	$scope.players = players; //created in the state resolve function
	$scope.currentTot = 0; //update this, need to add up value properties on the board
	$scope.targetNum = randomNum; //determined in the state resolve function
	$scope.message = "";

	$scope.increaseScore = function(tile){
		console.log('increasing by ', tile.bit);
		if(tile.position===0){
			$scope.currentTot += tile.bit;
			tile.position=1;
		} 
		if($scope.currentTot===$scope.targetNum){
			$scope.message = 'SOMEONE WON!!!';
		}
	};
	$scope.decreaseScore = function(tile){
		console.log('decreasing by ', tile.bit);
		if(tile.position===1){
			$scope.currentTot -= tile.bit;
			tile.position=0;
		} 
	};
//could make this a toggle function instead

});