var car1="Saab";
var car2="Volvo";
var car3="BMW";
var numberData=6;

var car = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	},
};
var car2 = {
	name : "genesis",
	ph : "300ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	},
};

var cars=[];
cars[0]=car;
cars[1]=car2;


//var cars=["Saab","Volvo","BMW",numberData, carObject];

//console.log(cars);
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);

console.log(cars[0].name+"의 마력은",cars[0].ph);