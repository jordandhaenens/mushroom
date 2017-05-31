"use strict";
console.log("MushroomFactory.js is loaded");

app.factory('MushroomFactory',function($q, $http){
	let getShrooms = function(){
		console.log("getShrooms is firing");
		return $q(function(resolve, reject){
			$http.get('#')
			.then(function(itemData){
				// console.log("itemData", itemData);
				let data = itemData.data;
				// console.log('data.mushrooms', data);
				resolve(data.mushrooms);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

	return {getShrooms};
});

// MushroomFactory.getShrooms();