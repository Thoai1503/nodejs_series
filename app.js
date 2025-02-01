// const names = require("./4-name");
// const sayHi = require("./5-utils");
// const data = require("./6-alternative-flavor");

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

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("Hello world");
//   res.end();
// });
// server.listen(5000);
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
