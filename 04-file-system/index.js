const fs = require('fs') // node ja possui, não precisa instalar via npm


console.log('Xurupitas')
//fileContent = fs.readFileSync('students.txt','utf8')
//Forma sincrona, não fazer assim no projeto
// dessa forma não usa da melhor forma os recursos do node
//const fileContent = fs.readFileSync('./students.txt', 'utf8')

//console.log(fileContent)
function printFileContent(error, data){
    if(error){
        console.log('File not found', error)
    return
}
console.log(data);

}

//callback - chama a função quando terminar 
//"simula" uma thread, pois o node é single thread
fileContent = fs.readFile('students.txt','utf8', printFileContent)
console.log(fileContent)
console.log('Xurupitas')
