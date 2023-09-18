let allien = {
  name: "mainul",
  age: "30",
  experience: 2,
  laptop: {
    cpu: "2.4hz",
    ram: "8 GB",
    brand: "Asus",
  },
};

console.log(allien);

for(let key in allien){
    console.log(key, allien[key]);
}