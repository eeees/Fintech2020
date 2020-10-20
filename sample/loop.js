//해당 배열을 다 합치고 싶다.
var cars=["BMW","VOLVO","Saab","Ford","Fiat","Audi"];
var text="";
var i;
for(i=0;i<cars.length;i++){
    text+=cars[i];
}

cars.map((car)=>{
    console.log(car);
});

console.log(text);