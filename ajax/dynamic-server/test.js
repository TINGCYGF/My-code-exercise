//获取fs文件系统对象
const fs = require("fs");
//读数据库
const usersString = fs.readFileSync('./db/users.json').toString();
const userArray = JSON.parse(usersString);
console.log(typeof usersString);
console.log(usersString);
console.log(typeof userArray);
console.log(userArray instanceof Array);

//写数据库
const user3 = {id:3, name:'tom', password:'yyy'}
userArray.push(user3)
const string = JSON.stringify(userArray)
fs.writeFileSync('./db/users.json', string)





