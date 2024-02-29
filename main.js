import { createServer } from 'http';
import fs from 'fs'
import { log } from 'console';
//fs means file sysytem, it give access to the file
const PORT = 8000
var buf = new Buffer.alloc(1024);

// fs.unlink('data/hello.txt', (err)=>{
//    if (err) console.log(err);
//    console.log('file deleted successfully');
// });

fs.mkdir('/src', (err)=>{
   if(err) console.log(err);
   console.log('folder created');
})


fs.writeFile('gmc.txt', 'Hello wlcome to gmc', (err)=>{
   if(err) console.log(err);
   console.log(data.toString());
})


fs.stat("data", (err, stats)=>{
if (err) console.log(err);
console.log("is a file?:", stats.isFile());
console.log("is a folder", stats.isDirectory());
// console.log(stats);
})

const text = fs.openSync('data/text.txt', 'rs')
console.log('open file', text);

fs.open("data/text.txt", 'r+', (err, data)=>{
   if(err) console.log('file failed to open', err);
   console.log('file opened', data);


   fs.read(data, buf, 0, buf.length, 0 ,(err, bytes)=>{
      if(err) console.log(bytes, 'bytes read');

      if(bytes > 0){
         console.log('boo', buf.slice(0, bytes).toString());
      }
      fs.close(data, (err)=>{
         if(err) console.log(err);
         console.log('file closed succefully');
      })
   });
});

fs.readFile('data/text.txt', (err, data)=>{
   if(err) console.log(err);
   console.log('async method:', data.toString());
})

const data = fs.readFileSync("data/text.txt", (err, data)=> {
   console.log('sync method:', data.toString());
})

//  const data = fs.readFileSync('input.txt')
 //readFileSync takes in a path etc

//  fs.readFile('input.txt',(err, data)=>{
//     if(err) console.log(err.message);
//     console.log(data.toString());
//  })

//  console.log(data.toString());
//  console.log('Program Ended');
// createServer((req, res)=>{
//     res. writeHead(200, {'content-TYpe': 'text/json'});
//     res.end('hello world')
// }).listen(PORT)

// console.log(`server is running on http://localhost:${PORT}`);