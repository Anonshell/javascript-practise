const fish = {
  name: "king Hilsha",
  address: "chandpur",
  color: "silver",
  phone: "0144444",
  price: 3000,
};

const phone = fish.phone;

const color = fish.color;

const price = fish.price;

console.log(fish.phone);
console.log(fish.color);

const { age, name } = { name: "alams", age: 4, profession: "makeup artist" };

console.log(age);

console.log(name);

const { address } = fish;

console.log(address);

const [first, another] = [33, 44, 53, 64];

console.log(first, another);

const nayk = ["sakib", "bappi", "reaj"];

const [king, lost, notun] = nayk;

console.log(lost);



function getNames(){


    return ['alif', 'halim'];

}

const [baba,cacha] = getNames();