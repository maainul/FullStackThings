let laptop2 = {
  cpu: "i7",
  ram: 16,
  brand: "HP",
  getConfig: function () {
    console.log(this.cpu);
  },
};

let laptop1 = {
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

