let map = new Map();
map.set("Mainul","Java");
map.set("Kamrul","JavaScript");
map.set("Abdul","Script");

console.log(map.keys());

console.log(map.values());

console.log(map.has("Kamrull"));

for(let [k,v] of map){
    console.log(k," : ", v);
}