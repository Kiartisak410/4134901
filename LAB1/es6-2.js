// array
const cars = ["toyota","kubota","mazda"];
const planes = [];
planes[4] = "F16"
planes[1] = "Boing"
console.log(cars);
console.log(planes);

const cities = new Array("Burirum",3100);
console.log(cities[1]);

// array method
cars.pop();
console.log(cars);
cars.push("Honda");
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Tata");
console.log(cars);

const jpCars = cars.slice(1,3)
console.log(jpCars);

cars.splice(1,1,"Subaru","Lexus");
console.log(cars);

const mixArr = cars.concat(planes);
console.log(mixArr);
const mixStr = mixArr.toString();
console.log(mixStr);

for(let val of mixArr){
    console.log(val);
}

console.log(mixArr.length);
for(let index of mixArr.keys()){
    console.log(index);
}


let text = "";
mixArr.forEach(conStr);
console.log(text);

function conStr(val,index,array){
    text += val + ":"
}

mixArr.forEach((val) => {
    text += val + ":"
});

const number = [10,20,15,5,2];
const number2 = number.map(multi2);
console.log(number2);

function multi2(val,index,array) {
    return val *3;
}

const over10 = number2.filter(overFN);
console.log(over10);

function overFN(val) {
    return val > 10;
}

let sum = number.reduce(addNum)
console.log("รวม"+sum)

function addNum(total, val) {
    return total + val;
}

let over10n = number.every(over1)
console.log("every:"+over10n)

function over1(val) {
    return val > 10;
}

let someOver10 = number.some(over1)
console.log("some:"+someOver10)

let first = number.find(over1)
console.log("find: "+first)

let firstIndex = number.findIndex(over1)
console.log(firstIndex)

const al = "ABCDEFG"
let alArr = Array.from(al)

console.log(alArr)