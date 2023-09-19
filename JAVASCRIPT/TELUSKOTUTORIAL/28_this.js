let laptop1 = {
  cpu: "ip",
  ram: 16,
  brand: "HP",
  greet: function () {
    let storage = 100;
    console.log("Hello world");
    console.log(this.cpu);
    console.log(this.brand);
    console.log(storage);
  },
};

let laptop2 = {
  cpu: "i5",
  ram: 16,
  brand: "HP",
  compare:  function(other) {
    if (this.cpu > other.cpu) {
        console.log(this);
      } else {
        console.log(other);
      }
      
  },
  getConfig : function(){
    console.log(this.cpu);
  }
};

