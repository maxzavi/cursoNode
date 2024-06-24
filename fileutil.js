const fs = require('fs')

const fileRead = (file) =>{
    test()
    fs.readFile(file , (err, data)=>{
        if (err) throw err
        console.log(data.toString())
    })
}

const test = ()=>{
    console.log('hola')
}

module.exports = {fileRead}