app.config(function ($stateProvider) {
    $stateProvider.state('board', {
        url: '/board/:bitChoice/:playerNum',
        templateUrl: 'js/board/board.html',
        controller: 'BoardCtrl',
        resolve: {
        	board: function($stateParams){ //creates the board object with individual tile info
                var tileCount =  Math.log2($stateParams.bitChoice)+1; 
        		var board = [];
				for (var i = tileCount-1; i >= 0; i--) {
					var bit = Math.pow(2,i);
					board.push({bit: bit, position: 0, calcVal: 0});
				}
				return board;
        	},
        	players: function($stateParams){ //creates an array for the players to be used in ng-repeat
        		var playersArray = [];
        		for (var i = 0; i < $stateParams.playerNum; i++) {
        			playersArray.push(i);
        		}
        		return playersArray;
        	},
            randomNum: function($stateParams){
                //determine range of number based on bits chosen
                var x = Number($stateParams.bitChoice);
                var max = 0;
                while(x % 1 === 0){ //while x is not a fraction
                    max += x;
                    x /= 2;
                }
                 //create random num
                return Math.floor((Math.random() * max) + 1);
            }
        }
    });
});