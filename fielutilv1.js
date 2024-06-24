const fs = require('fs')

const fileRead = (file) =>{
    console.log("V1")
    fs.readFile(file , (err, data)=>{
        if (err) throw err
        console.log(data.toString())
    })
}

const test = ()=>{
    console.log('hola')
}

module.exports = {fileRead}