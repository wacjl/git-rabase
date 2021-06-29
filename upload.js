const fs = require('fs')
const path = require('path')
const { exec } = require('child_process');

const flag = fs.existsSync(__dirname+'/src/my-vue-tools')
const myDirname =  path.resolve(__dirname,'./src/my-vue-tools')
const gitAdress = 'https://github.com/wacjl/my-vue-tools.git'
const cmds =[`git pull ${gitAdress}`,'git add . ' , 'git commit -m feat:提交',`git push ${gitAdress}`]
if(flag){
  execCamds(cmds)
}

function execCamds(cmds =[]){
  if(!cmds.length){
    return
  }
  const cmd = cmds.shift()

  exec(cmd,{cwd:myDirname},function(error){
    console.log(error)
    execCamds(cmds)
  })
}