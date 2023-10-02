### Returning Multiple Values from a Function

```js
function getName() {
  let firstName = "john",
    lastName = "Doe";

  return [firstName, lastName];
}

let names = getName();
const firstName = names[0],
  lastName = names[1];
console.log(firstName);
console.log(lastName);

const [firstName1, lastName1] = getName();
console.log(firstName1);
console.log(lastName1);
```

### Returning multiple values from an function using an object

```js
function getName() {
  let firstName = "john",
    lastName = "Doe";

  return {
    firstName: firstName,
    lastName: lastName,
  };
}
```

### Shorten

```js
function getName() {
  let firstName = "john",
    lastName = "Doe";
  return { firstName, lastName };
}
```

### Get the return values as an object

```js
let names = getNames();
let firstName = names.firstName;
let lastName = names.lastName;

let { firstName, lastName } = getName();
```

<b>JavaScript doesn’t support functions that return multiple values. However, you can wrap multiple values into an array or an object and return the array or the object.</b>
