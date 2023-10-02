function greet(){
    return 'Hello';
}

function name(user,func){
    const message = func();
    console.log(`${message} ${user}`);
}
name('Mainul',greet);
name('Hasan',greet);
name('Anik',greet);
name('Kusum',greet);

// Geeks for geeks example

function geeks_inner(value){
    return 'hello User! '+ value;
}

function geeks_outer(a,func){
    let rs = func(a);
    console.log(rs);
   // console.log(func(a));
}

geeks_outer('Geeks!',geeks_inner);
