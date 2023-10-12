const { error } = require('console');
const fsPromises = require('fs').promises;
const path = require('path');

const fileops = async()=>{
  try {
  const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf-8')
  console.log("hello filesoopes==>",data)
  }catch (err) {
    console.error(err)
  }
}
fileops();

// fs.writeFile(path.join(__dirname,'files','starter.txt'),'hello ibshar ahmed akrami',(error)=>{
//   if (error) throw error;
//   console.log(error);
// })

// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8',(error,data)=>{
//   if(error) throw error;
//   console.log(data,"hello")
// })
