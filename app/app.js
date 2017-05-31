"use strict";
console.log("app.js is loaded");

var app = angular.module("ShroomHunter", ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "./partials/mushroomList.html",
		controller: "ShroomCtrl"
	})
	.otherwise('/');
});