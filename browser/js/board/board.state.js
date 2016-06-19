app.config(function ($stateProvider) {
    $stateProvider.state('board', {
        url: '/board/:bitChoice/:playerNum',
        templateUrl: 'js/board/board.html',
        controller: 'BoardCtrl',
        resolve: {
        	players: function($stateParams){ //creates an array for the players to be used in ng-repeat
        		 //creates the board object with individual tile info
                var tileCount = +$stateParams.bitChoice;
                var keyArray = [['1','2','3'], 
                                ['0','-','='], 
                                ['z','x','c'], 
                                [',','.','/']];
                var playersArray = [];
        		for (var x = 0; x < $stateParams.playerNum; x++) {
                    var board = [];
                    for (var i = tileCount-1; i >= 0; i--) {
                        var bit = Math.pow(2,i);
                        board.push({index: i, bit: bit, position: 0});
                    }

                    playersArray[x] = { playerID: x+1, 
                                        currentTot: 0, 
                                        activeTile: tileCount-1,
                                        leftKey: keyArray[x][0],
                                        toggleKey:keyArray[x][1],
                                        rightKey:keyArray[x][2], 
                                        board: board};
        		}
        		return playersArray;
        	},
            randomNum: function($stateParams){
                //determine range of number based on bits chosen
                var x = Math.pow(2,Number($stateParams.bitChoice)-1);
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