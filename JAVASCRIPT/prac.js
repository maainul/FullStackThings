let printFullName  = function(city,ht){
    console.log(this.firstname+" "+this.lastname+" "+city+" "+ht);
};

const person = {
    firstname : "Mainul",
    lastname : "Hasan"
};
const person2 = {
    firstname :"Kusum",
    lastname : "Saifunnaher"
};

printFullName.call(person,'Sarabo','Kashimpur');
printFullName.call(person2,"Ghatail","Tangail");
printFullName.apply(person,['Sarabo','Kashimpur']);

printFullName.bind(person2);

console.log(pfm());
/*
The main deference between bind() and other method is bind() method retrurn function(exact copy of a method).
from that method we can print the method and as well as method information

*/