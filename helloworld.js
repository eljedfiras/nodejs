console.log('HELLO WORLD')

const fss = require('fs')
fss.writeFile('welcome.txt','hello node',(err)=>{
err?console.log('err'): console.log('la creation is done')
})

const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>') 
    res.end()
})
server.listen(3000,(err)=>{
    err?console.log(err): console.log('you are conected with the port 3000')
})

