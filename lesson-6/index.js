
// const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
// const util = require("util");
// let readFile = util.promisify(fs.readFile);

// async function readFileAsync(filename) {
//   // console.log("Reading file async 1.json");
//   let promise = readFile(`./data/${filename}`, { encoding: "UTF8" });
//   let content = await promise;
//   // console.log("File content type", typeof promise);
//   // console.log("File content is", content);
//   return content;
// }

// async function print3Files() {
//   try {
//       console.log("Reading file async 1.json");
//       let content = await readFileAsync("1.json");
//       console.log("File 1.json returned", content);
//       console.log("Reading file async nonexist.json");
//       let content2 = await readFileAsync("nonexist.json");
//       console.log("File 2.json returned", content2);
//       console.log("Reading file async 3.json");
//       let content3 = await readFileAsync("3.json");
//       console.log("File 3.json returned", content3);
//       console.log("Done executing async commands");
//   } catch (err) {
//       console.log("Oh no, we have error!");
//       console.log(err);
//   }
// }
// print3Files();

// const fs = require("fs");
// const util = require("util");
// const readFile = util.promisify(fs.readFile);

// function printFileSync(name) {
//   const fs = require("fs");
//   let content = fs.readFileSync(`./data/${name}`, { encoding: "UTF8" });
//   console.log(name, "is ready:");
//   console.log(content);
// }

// function printFileAsync(name) {
//   const fs = require("fs");
//   fs.readFile(`./data/${name}`, { encoding: "UTF8" }, function(err, content) { // the third parameter is callback
//     if(err){
//       console.log(err);
//     }
//     console.log(name, "is ready:");
//     console.log(content);
//     return content;
//   }); // it will be executed at the end of your async command
// }

// // Sync:
// // console.log("Reading file sync 1.json");
// // printFileSync("1.json");
// // console.log("Reading file sync 2.json");
// // printFileSync("2.json");
// // console.log("Done executing sync commands");

// // Async
// console.log("Reading file async 1.json");
// const a = printFileAsync("1.json");
// console.log('AAAAA', a );
// console.log("Reading file async 2.json");
// printFileAsync("2.json");
// console.log("Done scheduling async commands");

// fs.readFile(`./data/path.json`, { encoding: "UTF8" }, function(
//   err,
//   filepaths
// ) {
//   console.log(filepaths)
//   // converting string to json
//   let parsedFilepaths = JSON.parse(filepaths);
//   // showing what we got
//   console.log("Got file paths!", parsedFilepaths);
//   fs.readFile(parsedFilepaths.first, { encoding: "UTF8" }, function(
//     err,
//     contentFirst
//   ) {
//     console.log("Got first file", contentFirst);
//     fs.readFile(parsedFilepaths.second, { encoding: "UTF8" }, function(
//       err,
//       contentSecond
//     ) {
//       console.log("Got second file", contentSecond);
//       fs.readFile(parsedFilepaths.third, { encoding: "UTF8" }, function(
//         err,
//         contentThird
//       ) {
//         console.log("Got third file", contentThird);
//       });
//     });
//   });
// });

// let futureResult = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Now our Promise is fulfilled after 2 secs!");
//     reject('ERROR');
//     console.log("2 Now our Promise is fulfilled after 2 secs!");
//   }, 2000);
// });

// // Key feature is possibility to subscribe to result when it will be ready using .then()
// futureResult.then(function(resp) {
//   console.log(resp);
//   console.log("1 Yay! Promise is fulfilled!");
// }).catch(err => {
//     console.log(err);
//     throw new Error(err);
// })
// // You can subscribe multiple times to same promise:
// futureResult.then(function() {
//   console.log("2 Yay! Promise is fulfilled!");
// });

// function readFile(filename) {
//   return new Promise(function(resolve, reject) {
//     fs.readFile(
//       // relative path to file
//       `./data/${filename}`,
//       // reading options
//       { encoding: "UTF8" },
//       // special function called callback:
//       function(err, content) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(content);
//         }
//       }
//     );
//   });
  // Our function returns Promise,
  // that will allow us listen for result of async operation
// }

// And usage is folowing
// console.log("Reading file async 1.json");
// let promise1 = readFile("12.json");
// // Instead of passing callback - we are "subscribe" to "resolved" state of promise
// promise1.then(function(content) {
//   console.log("File 1.json returned", content);
// }).catch(err => console.log(err));

// const fs = require("fs");
// const util = require("util");
// const readFile = util.promisify(fs.readFile);

// async function readFileAsync(filename) {
//   console.log("Reading file async 1.json");
//   const content = await readFile(`./data/${filename}`, { encoding: "UTF8" });
//   // console.log("File content type", typeof content);
//   // console.log("File content is", content);
//   return content;
// }

// const asyncLog = async () => {
//   try{
//     const res = await readFileAsync('12.json');
//     console.log(res);
//     return res;
//   } catch (e){
//     console.log(e);
//   }
  
// }

// const result = asyncLog();
// console.log(result);

const https = require('https');

const url = 'https://node-weather-app-apo.herokuapp.com/weather?address=London';

const getWeatherData = () => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // console.log('statusCode:', res.statusCode);
      // console.log('headers:', res.headers);
    
      res.on('data', (d) => {
        resolve(JSON.parse(d));
      });
    
    }).on('error', (e) => {
      reject(e);
    });
  })
}

getWeatherData()
.then(data => {
  console.log(data);
})
.catch(e => {
  console.log(e)
})

const asyncGetWeather = async() => {
  const result = await getWeatherData();
  console.log(result)
}

asyncGetWeather();