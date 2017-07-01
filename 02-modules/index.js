const module1 = require('./module1') // é um import síncrono
const saygetname =  require('./module2') //"importando" os módulos

console.log('main mojo')
console.log(module1)
console.log(module2)
 
module1.sayHello(module1.getEncapsulatedVar())