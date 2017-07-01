const args = process.argv.slice(2)

function getName(){
    return process.argv[2]
}

function sayHello (name = ''){
    console.log('Hello %s !',name)
}

sayHello(getName());