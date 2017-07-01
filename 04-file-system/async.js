
function op1(){
    console.log('OP1');
}


function op2(){
    setTimeout(()=>console.log('Op2'), 1000)
}

function op3(){
    console.log('OP3');
}

op1()
op2()
op3()
