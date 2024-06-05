const fs=require('fs')

fs.writeFileSync("text.txt","hello world",(err)=>{
    console.log(err);
})

// fs.writeFile("text.txt","hello world",(err)=>{
//     console.log(err);
// })

const result =fs.readFileSync("./text.txt","utf-8");
console.log(result);

fs.readFile("./text.txt","utf-8",(res,err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})