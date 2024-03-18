// let n=5;

// for(let i=0; i<n; i++){
//     console.log("Hello, ",i);
// }
// console.log("Bye");

// let args=process.argv;
// for(let i=2; i<args.length;i++){
//     console.log("Hello ",args[i]);
// }

// const info = require("./Fruits");
// console.log(info[0].name);

const figlet = require("figlet");

figlet("Praveen  Bhardwaj !!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });