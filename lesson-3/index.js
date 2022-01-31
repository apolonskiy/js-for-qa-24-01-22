

// // Regular function example
// function myRegularFnc() {
//   console.log(this);
// }

// myRegularFnc()

// // Arrow function example
// const myArrowFnc = (arg1) => {
//   return arg1/2;
// }

// const myArrowFuncShort = (arg1) => arg1/4;

// console.log(myArrowFnc(6));

// console.log(myArrowFuncShort(8))

// const title = 'this Is new title'

// const post = {
//   title,
//   comment: {
//     firstName: 'Andrii',
//     lastName: 'SomeName'
//   },
//   arr: [1,2,3],
//   "is Live": true,
//   someFunc: function (arg1) {
//     return !!Number(arg1)
//   }
// }

// console.log(post.title)


// const arr1 = ['qq','eee','werew'];

// const arrObj = {
//   0: 'qq',
//   1: 'eee',
//   2: 'werew'
// }

// console.log(arr1[0]);
// console.log(typeof arr1);
// console.log(arrObj[0])

// const post = {
//   qwe: 'someStr',
//   comment: {
//     firstName: 'Andrii',
//     lastName: 'SomeName'
//   },
//   arr: [1,2,3]
// }

// const copyObject1 = {...post}
// const copyObject1 = Object.assign({}, post)
// copyObject1.comment.firstName = 'Vasya'
// copyObject1.arr[1] = 'Vasya'
// console.log(post);
// console.log(copyObject1);

// const jsonObj = JSON.stringify(post);
// const deepCopyObj = JSON.parse(jsonObj);
// deepCopyObj.comment.firstName = 'Vasya'
// deepCopyObj.arr[1] = 'Vasya'
// console.log(post);
// console.log(deepCopyObj);


// const post = {
//   qwe: 'someStr',
//   comment: {
//     firstName: 'Andrii',
//     lastName: 'SomeName'
//   },
//   arr: [1,2,3]
// }

// const {comment, qwe: someNewKey} = post;
// console.log(someNewKey);
// comment.firstName = 'QQQQ'
// console.log(post);


// const arr1 = [1,3,5,6, [1,2]];

// const [first, second, ...rest] = arr1;
// console.log(rest)
// console.log(arr1);
// rest[2][1] = 10
// console.log(arr1)





// Practice part
// --------------------------

// SPREAD / COPY object
// const a = [1,2,3];
// const b = {a, b: 'text', c: {d: '123', e: null}}
// const c = {...b}
// const c2 = Object.assign({}, b);

// b.a = 'NEW';
// console.log(c2)
// console.log(b)
// console.log(c);


// REST operator
// function sortArgs(arg1, ...args) {

//   console.log(args)
//   someOtherFunc(args);
//   console.log(arg1);
//   return args.sort()
// }
// console.log(sortArgs(1,2,3,1,5,6,7,7,8))

// SPREAD for arrays
// const a = ['1', '2', '1'];
// const w = a;
// const q = [...a];
// q[1] = 'SOME S}THING'
// a[0] = 'WWWW'

// console.log(a);
// console.log(w);
// console.log(q);
// console.log(sortArgs(...a));

// const object = {
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

// console.log(object)


// const json = JSON.stringify(object)

// console.log(typeof object);

// console.log(json);

// console.log(JSON.parse(json))


// DESTRUCTURE OBJECT< SHOW IT!!!!


// function generateObj(addfield = true) {
//   const obj =  {
//     testField: 'test'
//   }
// if(addfield){
//   return Object.assign({}, obj, {additionalField: {newField: 'It exists!'}})
// } else{
//   return obj;
// }
// }


// // expect(generateObj(false).additionalField.newField).eql(200);
// console.log(generateObj(false)?.additionalField?.newField);


// const obj1 = {
//   testFiled1: {
//     testField2: 'STROKA'
//   }
// }
// console.log(obj1.testFiled1['testField2'])


//--------------------------------\\


// const maxNumber = (a, b) => a>b ? a : b
// console.log(maxNumber(1,2));

// const maxNumber = (a,b) => a>b ? a : b
// console.log(maxNumber(5,1));

// function recursion (num) {
//     if(num < 2){
//         return 1;
//     }

//     return num * recursion(num - 1);
// }

// console.log(recursion(5))
