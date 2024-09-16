console.log('fuck world')
const  fs = require('fs')

fs.readFile('2.txt','utf8',function(err,dataStr){
    console.log(err)
    console.log('-------')
    console.log(dataStr)

})