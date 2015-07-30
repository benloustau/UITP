var myModule = angular.module('UITHEMEPICKER', []);

myModule.controller('MyController', function(){
	var self = this;

	self.colors = [{

	name:"Red",
	backgroundcolor: "red",
	folders: "green",
	item: "blue",

	}, {

	name:"Green",
	backgroundcolor: "green",
	folders: "red",
	item: "blue",

	}, {

	name:"Blue",
	backgroundcolor: "blue",
	folders: "green",
	item: "red",

	}, {

	name:"Yellow",
	backgroundcolor: "yellow",
	folders: "pink",
	item: "gray",

	}, {

	name:"None",
	backgroundcolor: "white",
	folders: "white",
	item: "white",

	}];

	self.selection = self.colors[4];


	self.folders = [ {
		name: "Grocery",
		items: []
	}, {
		name: "Vacation",
		items: []
	}, {
		name: "Angular",
		items: []
	}];


	self.addItem = function(addItemObject) {
		self.userFolderSelection.items.push(addItemObject)
		self.addItemObject = {};
	};

	self.userFolderSelection = {};


});