// console.log(1 === '1')

// if (!10 > 5) {
//     return true;
//   } else {
//     return false;
//   }

// ------ DATA TYPES TRANSFORMATION

// // String
// console.log(String(null));
// console.log(String(undefined));
// console.log(typeof (null == undefined));
// console.log(1 + '1');
// console.log(2 + 1 + '1');
// console.log('1' + 1 + 2 );


// // Number
// let b = Number('12');
// let a = +'12';
// console.log(typeof a);
// a = a.toString() || String(a);
// console.log( typeof a);

// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(' \n  12 \r \n'));

// // Bolean
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean('number'));


// console.log(null >= '0');
// console.log(null == 0);
// console.log(Boolean(null) === 0);

// console.log(undefined >= 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);

// console.log('apple' > 'appla');
// console.log('p'.charCodeAt(0))

// console.log(true == 1);
// console.log(false == 0);

// ------ OPERATORS

// let x = 4;
// let y = 3;

// console.log(x + y); // Binary operators applied, two operand: x and y, cals expression
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x ** y);
// console.log(x % y);

// console.log(2 - '2');
// console.log('6' / '2');
// console.log('8' * '2');

// let d = -1;
// console.log(+d);

// let g = Number('a');
// console.log(g);

// console.log(+true);
// console.log(1 + +"1");

// let incrementCounter = 1;
// // ++incrementCounter;
// const temp = incrementCounter--;
// //incrementCounter = incrementCounter + 1;
// console.log(incrementCounter);
// console.log(temp)


// let x = 10;
// // x++
// x = x + 1;
// x += 5
// console.log(x);

// // You can also use 
// let h = 2;
// h = h - 2;
// h -= 2;
// h = h * 2;
// h *= 2;
// console.log(h);

// console.log(true && false);
// console.log(1 * 0);
// // Logical OR operator return true if one operator = true
// console.log(true || false);
// console.log(1 + 0);
// // ! oposit
// console.log(!true);
// console.log(!'1');

// // Logical operators with non boolean
// console.log(true || false);
// console.log(false || 'Mykola');
// console.log(undefined || 'Mykola');
// console.log(false || 1);
// console.log(false || 1 || 2);

// let loginPage = ''; // undefined
// let defaultPage = false;

// let currentPage = loginPage || defaultPage;

// console.log(currentPage);

// if(1>0){
//     console.log(1);
// }

// let hour = 11;
// if (hour >= 6 && hour < 12) {
//     console.log('Good morning!');
// } else if (hour >= 12 && hour <= 18) {
//     console.log('Good afternoon!');
// } else {
//     console.log('Good evening!');
// }
// console.log('Lol');

// value ? trueResult : falseResult

// let name = 'Karl';
// let matchName = name.length <= 4 ? 'Yes it is Karl' : 'No, it is wrong name';
// console.log(matchName);
// name = 'Not Karl';
// matchName = name == 'Karl' ? true : false;
// console.log(matchName)

// SWITCH/CASE
// let role = 'admin';
// switch (role) {
//     case 'guest':
//         console.log('Login Guest user');
    
//     case 'qqq':
//     case 'oleh':
//     case 'admin':
//         console.log('Login Admin user');
   
//     case 'test':
//         console.log('Login Admin user');
//         break;
//     default:
//         console.log('Login Unknown user');
// }

// for (let i = 1; i < 11111; i*=5) {
//     // statement
//     console.log('Iteration:', i);
// }

// continue, skip one iteration
// for (let i = 0; i < 5; i++) {
//     if (i === 1 || i === 3) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     if (i === 0) {
//         break;
//     }
//     console.log(i);
// }

let i = 0;
while (i < 3) {  // (condition)
    console.log(i);
    i++;
    // do not forget increment variable
}

let j = 0;
do {
    console.log(j);
    j++;
    console.log(j);
} while (j < 3);