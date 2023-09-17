// Mon - 7pm
// Tue - Thurs - 4am
// Fri - 9am
// Sat - sun - 8am


let day = "Mon"

if(day === "Mon"){
    console.log("7 pm");
}else if (day === "Tue"){
    console.log("4 am");
}else if (day === "Fri"){
    console.log("9 am");
}else{
    console.log("8 am");
}

switch(day){
    case 'Mon':
        console.log("7 pm");    
        break; 
    case 'Tue':
        console.log("4 pm");  
        break;
    case 'Fri':
        console.log("9 pm");
    default:
        console.log("8 pm");  
}