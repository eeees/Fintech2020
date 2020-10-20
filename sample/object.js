//기능을 일급객체로 취급?


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
console.log(car.name);
car.start();