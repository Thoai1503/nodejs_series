// const names = require("./4-name");
// const sayHi = require("./5-utils");
// const data = require("./6-alternative-flavor");
// console.log(names.john, names.john2);
// require("./7-mind-grenade"); //Invoke function that don't need assign it to a variable

// const os = require("os");
// const user = os.userInfo();
// console.log("1." + user);

// console.log(`2. The System Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalmem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log("3." + currentOS);

// const path = require("path");

// console.log(path.sep);
// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log("4." + filePath);

// const base = path.basename(filePath);
// console.log("5." + base);

// const _ = require("lodash");
// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems + "Heloo");
//add  new

// const func = async () => {
//   await setTimeout(() => {
//     console.log("Hello world");
//   }, 2000);
// };
// func();

// console.log("I will run first");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Request start");
//   if (req.url === "/") {
//     res.end("Home Page");
//   }
//   if (req.url === "/about") {
//     //BLOCKING CODE

//     getText("./content/subfolder/first.txt")
//       .then((result) => console.log("Result : " + result))
//       .catch((err) => console.log(err));

//     res.end("About Page");
//   }
//   res.end("Error page");
// });
// server.listen(5000, () => {
//   console.log("Server listening on port : 5000...");
// });

// readFile("./content/subfolder/first.txt", "utf8", (err, data) => {
//     if (err) {
//       return;
//     } else {
//       console.log(data);
//     }
//   });

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// getText("./content/subfolder/first.txt")
//   .then((result) => console.log("Result : " + result))
//   .catch((err) => console.log(err));

// const start = async () => {
//   try {
//     const first = await readFilePromise(
//       "./content/subfolder/first.txt",
//       "utf8"
//     );
//     const second = await readFilePromise(
//       "./content/subfolder/second.txt",
//       "utf8"
//     );
//     await writeFilePromise(
//       "./content/subfolder/result.txt",
//       `This is result: ${first} and ${second}`
//     );
//     console.log("Result :" + first);
//     console.log("Result 2:" + second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const EventEmitter = require("events");

const customEmmitter = new EventEmitter();

customEmmitter.emit("response");
customEmmitter.on("response", () => {
  console.log(`data received`);
});

customEmmitter.on("response", () => {
  console.log(`other logic`);
});
