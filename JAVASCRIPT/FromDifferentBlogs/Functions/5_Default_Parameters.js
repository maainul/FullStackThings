function say(message='Hi'){
    console.log(message);
}
say();
say('Hello');

function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add());

