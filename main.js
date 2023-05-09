
let s1= {
    fname:"Pulkit",
    lname:"Acharya",
    age:27
}

let s2= {
    fname:"Amit",
    lname:"Jain",
    age:26
}


let s3= {
    fname:"Sandeep",
    lname:"Vashisht",
    age:24
}


let students =[s1,s2,s3];

for(let i of students){
    document.write("<ul style='color:red;height:70px;background:yellow'>");
    document.write("<li>"+i.fname+"</li>");
    document.write("<li>"+i.lname+"</li>");
    document.write("<li>"+i.age+"</li>");
    document.write("</ul>")
}



