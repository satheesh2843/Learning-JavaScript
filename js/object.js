const student={
    name:"satheesh",
    no:"21beece051",
    num:1,
    content:{
        earn:"gain knowledge",
        give:"respect"
    },
    array:["one",2,true],
    action:function(){
        return "function is calling";
    }

};

console.log("calling name in object");
console.log(student.name);
console.log("calling object inside the another object")
console.log(student.content.earn);
console.log("printing array in objects");
console.log(student.array);
console.log("calling function inside the objects");
console.log(student.action());



console.log("----------------for in loop -----------")
for(let i in student){
    console.log(student[i]);
}


console.log("destruturing the objects"); 
console.log("assinging the key name to another variables");
const {name:newvar,array:newarray}=student;
console.log(newvar );