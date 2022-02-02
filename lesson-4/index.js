// fot in, for of.
// Object.keys, Ocject.values
// функции могут вызываться выше, чем они обьявлены

// const abc = {
//   test: "smth",
//   age: 23,
//   obj: {
//     "internal": ['value']
//   },
//   logString: () => {
//     console.log('test')
//     // return('some value')
//   }
// }

// console.log(Object.keys(abc))
// console.log(Object.values(abc))

// let arr = new Array('test');
// let arr = [1,2,3];
// console.log(arr.length);
// arr[arr.length] = 55;
// console.log(arr);

// let arr = [1, 2, 3, 4, 5,];
// console.log(Array.isArray(arr))

// const url = 'https://some.site.com/someRoute';
// console.log(url.split('/'))

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.pop()); // remove "Pear" and print it
// console.log(fruits);

// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.shift()); // remove Apple and print it
// console.log(fruits);

// let fruits = ["Orange", "Pear"];
// fruits.unshift("Apple");
// console.log(fruits);

// let fruits = ["Apple"];
// fruits.push("Orange", "Peach");
// fruits.unshift("Pineapple", "Lemon");
// // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
// console.log(fruits);
// fruits.length = 20;
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Pear"];

// // (1) Just regular 'for' loop with checking length
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// const abc = {
//   test: "smth",
//   age: 23,
//   obj: {
//     "internal": ['value']
//   },
//   logString: () => {
//     console.log('test')
//     // return('some value')
//   }
// }

// let fruits = ["Apple", "Orange", "Pear"];

// for (let value of fruits) {
//     console.log(value);
// }

// for (let value of Object.values(abc)) {
//     console.log(value);
// }

// for (const fruit in fruits) {
//     console.log(fruit);
// }

// for (let key in abc) {
//     console.log(abc[key]);
// }

// const forEachFunc = (item, ind, arr) => {
//     console.log(item);
// }

// fruits.forEach(forEachFunc);


// const arr = [
//     {name: 'name', email: 'some@email.com', age: 25},
//     {name: 'name2', email: 'some2@email.com', age: 90},
//     {name: 'name3', email: 'some3@email.com', age: 37}
// ]

// const emailsArr = arr.filter((user) => user.age < 40).map((item) => {
//     return {
//         email: item.email,
//         newField: 'newValue'
//     }
// })


// console.log(emailsArr)
// console.log(arr)


// const arr = ['test', 'qqq', 'abc', 'wewe', 'abc']

// console.log(arr.indexOf('abc'))
// console.log(arr.indexOf('abc') >= 0)
// console.log(arr.lastIndexOf('abc'))

// const arr = [
//     {name: 'name', email: 'some@email.com', age: 25},
//     {name: 'name2', email: 'some2@email.com', age: 90},
//     {name: 'name3', email: 'some3@email.com', age: 37}
// ]

// console.log(arr.find((item, ind, arr) => item.age === 25))
// console.log(arr.findIndex((item, ind, arr) => item.age > 40))

// console.log(arr.some(elem => elem.age > 90))
// console.log(arr.every(elem => elem.age < 90))

// console.log(arr.splice(1, 1, [1,2,3]));
// console.log(arr)

// function slice (indexStart = 0, indexEnd){
//     cutArr(indexStart, indexEnd ? indexEnd : rrray.length)
// }
// console.log(arr.slice(0, 2));
// console.log(arr)

// let arr = [1, 3, 2, 15];
// // the method reorders the content of arr (and returns it)
// // modify your array


// console.log(arr.sort((a, b) => a-b).reverse());

// let names = 'one, two, three';
// let arr = names.split(',').map(item => item.trim());
// console.log(arr);
// console.log(arr.join(', '))


// const arr2 = [1,2,3,[1,2,[3,4,5]]];
// console.log(arr2[3][2][2])
// console.log(arr2.flat(10))

// someConst

// try {
//     // const a = 's';
//     // throw new Error('My Error');
//     const response = {resonse: 200};
//     return response.status
// } catch(err){
//     console.log(err)
// } finally {
//     console.log("finally");
//   }

// const arr = [1,2,3,4,5];

// console.log(arr.reduce((acc, currValue) => {
//     return acc + currValue
// }, 10))