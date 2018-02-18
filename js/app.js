var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
	console.log("In my controller");

	$scope.newUser = {};
	$scope.selectUser = {};
	$scope.message = "";

	$scope.users = [];

	$scope.users = [

		{username:"ubiswas",fullname:"Uttam Biswas", email:"uttam@gmail.com"},
		{username:"ubiswas1",fullname:"Uttam Biswas1", email:"uttam1@gmail.com"},
		{username:"ubiswas2",fullname:"Uttam Biswas2", email:"uttam2@gmail.com"}
	];

	$scope.saveUser = function(){
		console.log($scope.newUser);
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User added successfully";

	};

	$scope.selectUserToEdit = function(user){		
		$scope.selectUser= user;
		console.log($scope.selectUser);
		

	};

	$scope.updateUser = function(){
		$scope.message = "User updated successfully";
	};


	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.selectUser),1);
		$scope.message = "User deleted successfully";
	};

});