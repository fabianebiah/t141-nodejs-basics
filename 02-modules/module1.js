console.log('Module 1')

let encapsulatedVariable = 'Xurupitas'

function sayHello(name = ''){
    console.log(`Hi ${name}`)
}


function getEncapsulatedVar(){

    return encapsulatedVariable
}
//exposing method sayHello
module.exports = {
    sayHello,
    getEncapsulatedVar
}