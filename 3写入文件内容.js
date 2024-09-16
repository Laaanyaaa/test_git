const  fs = require('fs')

fs.writeFile('2.txt','tmlgb',function(err){
    if(err){
        return console.log('写文件失败' + err.message)
    }
    console.log('xie文件成功')

})