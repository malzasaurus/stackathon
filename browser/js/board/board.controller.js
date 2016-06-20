app.controller('BoardCtrl', function($window, $scope, $stateParams, players, randomNum){

	$scope.players = players; //created in the state resolve function
	$scope.targetNum = randomNum; //determined in the state resolve function
	$scope.message = 'Target Number: '+ $scope.targetNum;
	$scope.currentTile = function(player, tile){
		return player.activeTile === tile.index;
	};

   $scope.currentPosition = function(tile){
      return tile.position ===1;
   };
   $scope.currentWinner = function(player){
      if(player.currentTot === $scope.targetNum){
         $scope.message = 'Winner: Player ' + player.playerID + '!';
         return true;
      } else {
         return false;
      }
      // return player.currentTot === $scope.targetNum;
   };

	$scope.toggle = function(player, tile){
		if(tile.position===0){
			player.currentTot += tile.bit;
			tile.position=1;
		} else {
			player.currentTot -= tile.bit;
			tile.position=0;
		}
	};
	$window.onkeydown = function(event) {
   		var key = event.keyCode;
   		var playerKeys = [
   							  [49,50,51],		//player 1
							     [48,189,187],	//player 2
   							  [90,88,67],		//player 3
   							  [188,190,191]	//player 4
   						   ];

   		var left = [49,48,90,188];
   		var flip = [50,189,88,190];
   		var right = [51,187,67,191];
   		//determine player
   		var currentPlayer;
   		for (var i = 0; i < $scope.players.length; i++) {
   			if(playerKeys[i].indexOf(key) !== -1){
   				currentPlayer = i;
   				break;
   			}
   		}
   		var playerObj = $scope.players[currentPlayer];

   		//determine command
   		if(left.indexOf(key) !== -1){
   			if(playerObj.activeTile+1 === playerObj.board.length){
   				playerObj.activeTile=0;
   			} else {
   				playerObj.activeTile+=1;
   			}
   			$scope.$digest();
   		}
   		if(flip.indexOf(key) !== -1){
   			var activeTileIndex = playerObj.board.length-playerObj.activeTile-1;
   			$scope.toggle(playerObj, playerObj.board[activeTileIndex]);
   			$scope.$digest();
   		}
   		if(right.indexOf(key) !== -1){
   			if(playerObj.activeTile === 0){
   				playerObj.activeTile = playerObj.board.length-1;
   			} else {
   				playerObj.activeTile-=1;
   			}
   			$scope.$digest();
   		}
	};

});