
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process');

const flag = fs.existsSync(__dirname+'/src/my-vue-tools')
const myDirname =  path.resolve(__dirname,'./src')
if(!flag){
  exec('git clone https://github.com/wacjl/my-vue-tools.git',{cwd:myDirname},function(error){
    console.log(error)
  })
}else{
  exec('git pull https://github.com/wacjl/my-vue-tools.git',{cwd:myDirname+'/my-vue-tools'},function(error){
    console.log(error)
  })
}