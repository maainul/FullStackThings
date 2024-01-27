# JavaScript and Java regarding key-value pair storage
## JavaScript:
### 1. Object:
Objects are commonly used for key-value pairs.Keys are strings or symbols.Values can be of any data type.
```js
const myObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};
```

### 2. Map:
Map is a built-in object introduced in ES6 for key-value pairs.Keys can be of any data type.Order of insertion is preserved.Provides built-in methods for working with key-value pairs.
```js
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');
```
## Java:

### 1. HashMap:
One of the most widely used classes for key-value mappings in Java.
Provides constant-time performance for basic operations like get and put.
```js
Map<String, String> myMap = new HashMap<>();
myMap.put("key1", "value1");
myMap.put("key2", "value2");
myMap.put("key3", "value3");
```
### 2. TreeMap:
Sorted map implementation based on a Red-Black tree.Maintains keys in sorted order.
```js
Map<String, String> myMap = new TreeMap<>();
myMap.put("key1", "value1");
myMap.put("key2", "value2");
myMap.put("key3", "value3");
```
### 3. LinkedHashMap:
Maintains order of keys based on insertion order.Similar to HashMap but with predictable iteration order.
```js
Map<String, String> myMap = new LinkedHashMap<>();
myMap.put("key1", "value1");
myMap.put("key2", "value2");
myMap.put("key3", "value3");
```
### 4. HashTable:
Legacy class, largely replaced by HashMap.Synchronized, providing thread safety.
```js
Hashtable<String, String> myTable = new Hashtable<>();
myTable.put("key1", "value1");
myTable.put("key2", "value2");
myTable.put("key3", "value3");
```
Choose the appropriate data structure based on your specific needs, such as performance, ordering, and thread safety.

# Loop Map

In JavaScript, you can loop through a Map using various methods. Here are a couple of common approaches:
## Using forEach method:
```js
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
```
## Using for...of loop:
```js
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

for (const [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}
```
## Using for...of loop with entries() method:
```js
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

for (const [key, value] of myMap.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}
```
