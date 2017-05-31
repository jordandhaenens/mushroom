"use strict";
console.log("MushroomCtrl.js is loaded");


app.controller('ShroomCtrl', function($scope, MushroomFactory){
	MushroomFactory.getShrooms()
	.then(function(data){
		let array = [];
		for (let item in data){
			array.push(data[item]);
		}
		$scope.mushrooms = array;
		console.log("$scope.mushrooms", $scope.mushrooms);

	});
});